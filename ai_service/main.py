from io import BytesIO

import face_recognition  # type: ignore
import numpy as np
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

print("Using face_recognition model")

app = FastAPI(title="Face Embedding Service", version="1.0.0")

MIN_BRIGHTNESS_THRESHOLD = 45.0
MIN_SHARPNESS_THRESHOLD = 35.0


def _to_grayscale(image: np.ndarray) -> np.ndarray:
    if image.ndim == 2:
        return image.astype(np.float64)
    return (
        0.299 * image[:, :, 0]
        + 0.587 * image[:, :, 1]
        + 0.114 * image[:, :, 2]
    ).astype(np.float64)


def _brightness_score(gray: np.ndarray) -> float:
    return float(np.mean(gray))


def _sharpness_score(gray: np.ndarray) -> float:
    gx = np.diff(gray, axis=1)
    gy = np.diff(gray, axis=0)
    return float(np.var(gx) + np.var(gy))


@app.post("/get-embedding")
async def get_embedding(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        if not contents:
            return JSONResponse(status_code=400, content={"error": "Invalid or unreadable image"})

        image = face_recognition.load_image_file(BytesIO(contents))
        gray = _to_grayscale(image)
        brightness = _brightness_score(gray)
        sharpness = _sharpness_score(gray)

        if brightness < MIN_BRIGHTNESS_THRESHOLD:
            return JSONResponse(status_code=400, content={"error": "Low light image"})
        if sharpness < MIN_SHARPNESS_THRESHOLD:
            return JSONResponse(status_code=400, content={"error": "Blurry image"})

        print("Generating real face embedding")
        face_locations = face_recognition.face_locations(image)

        if len(face_locations) == 0:
            return JSONResponse(status_code=400, content={"error": "No face detected"})
        if len(face_locations) > 1:
            return JSONResponse(status_code=400, content={"error": "Multiple faces detected"})

        encodings = face_recognition.face_encodings(image)
        if not encodings:
            return JSONResponse(status_code=400, content={"error": "No face detected"})

        embedding = np.asarray(encodings[0], dtype=np.float64).tolist()
        return JSONResponse(status_code=200, content={"embedding": embedding, "engine": "face_recognition"})
    except Exception:
        return JSONResponse(status_code=400, content={"error": "Invalid or unreadable image"})
 

