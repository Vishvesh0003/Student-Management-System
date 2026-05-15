import mongoose from "mongoose";
import { config } from "../../config/env";

export async function connectDB() {
await mongoose.connect(config.MONGO_URI);
console.log("MongoDB Connected");
}

export async function disconnectDB() {
await mongoose.disconnect();
console.log("MongoDB Disconnected");
}
