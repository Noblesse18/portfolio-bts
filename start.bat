@echo off
chcp 65001 >nul
title Portfolio BTS SIO

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

if not exist "frontend\node_modules" (
    echo 📥 Installation des dépendances...
    cd frontend
    call npm install
    cd ..
)

echo ✅ Dépendances vérifiées.
echo.

:: Démarrage du Frontend
echo 🎨 Démarrage du serveur de développement...
cd frontend
start "Portfolio BTS SIO" cmd /k "npm run dev"
cd ..

:: Attendre un peu
timeout /t 3 /nobreak >nul

echo.
echo ╔════════════════════════════════════════╗
echo ║       ✅ Serveur démarré !             ║
echo ╠════════════════════════════════════════╣
echo ║  🌐 URL: http://localhost:5173         ║
echo ╠════════════════════════════════════════╣
echo ║  Fermez la fenêtre pour arrêter        ║
echo ╚════════════════════════════════════════╝
echo.

:: Ouvrir le navigateur
timeout /t 2 /nobreak >nul
start http://localhost:5173

echo Appuyez sur une touche pour fermer...
pause >nul
