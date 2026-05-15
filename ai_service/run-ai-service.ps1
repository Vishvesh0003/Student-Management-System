$serviceRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$python = Join-Path $serviceRoot "venv\Scripts\python.exe"

if (-not (Test-Path $python)) {
  $python = "python"
}

Set-Location $serviceRoot
& $python -m uvicorn main:app --host 0.0.0.0 --port 8000