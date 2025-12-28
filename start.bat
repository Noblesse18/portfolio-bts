@echo off
chcp 65001 >nul
title Portfolio BTS SIO Launcher

echo.
echo ╔════════════════════════════════════════╗
echo ║     🚀 Portfolio BTS SIO Launcher      ║
echo ╚════════════════════════════════════════╝
echo.

:: Vérifier si node est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js n'est pas installé. Veuillez l'installer.
    pause
    exit /b 1
)

:: Vérification des dépendances
echo 📦 Vérification des dépendances...

if not exist "backend\node_modules" (
    echo 📥 Installation des dépendances backend...
    cd backend
    call npm install
    cd ..
)

if not exist "frontend\node_modules" (
    echo 📥 Installation des dépendances frontend...
    cd frontend
    call npm install
    cd ..
)

echo ✅ Dépendances vérifiées.
echo.

:: Démarrage du Backend dans une nouvelle fenêtre
echo 🔧 Démarrage du Backend (port 3001)...
start "Backend - Portfolio BTS" cmd /k "cd backend && npm start"

:: Attendre un peu
timeout /t 2 /nobreak >nul

:: Démarrage du Frontend dans une nouvelle fenêtre
echo 🎨 Démarrage du Frontend (port 5173)...
start "Frontend - Portfolio BTS" cmd /k "cd frontend && npm run dev"

:: Attendre un peu
timeout /t 3 /nobreak >nul

echo.
echo ╔════════════════════════════════════════╗
echo ║       ✅ Serveurs démarrés !           ║
echo ╠════════════════════════════════════════╣
echo ║  🎨 Frontend: http://localhost:5173    ║
echo ║  🔧 Backend:  http://localhost:3001    ║
echo ╠════════════════════════════════════════╣
echo ║  Fermez les fenêtres pour arrêter      ║
echo ╚════════════════════════════════════════╝
echo.

:: Ouvrir le navigateur
timeout /t 2 /nobreak >nul
start http://localhost:5173

echo Appuyez sur une touche pour fermer ce terminal...
pause >nul

