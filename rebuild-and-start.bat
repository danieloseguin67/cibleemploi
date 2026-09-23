@echo off
setlocal

cd /d "%~dp0"

echo Building client...
call npm run build:client
if errorlevel 1 goto :error

echo Starting Angular development server...
call npm run start

goto :eof

:error
echo Build failed.
exit /b 1
