#!/bin/bash

# ===========================================
# Script de démarrage du Portfolio BTS SIO
# ===========================================

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════╗"
echo "║     🚀 Portfolio BTS SIO Launcher      ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Fonction pour arrêter les processus à la fermeture
cleanup() {
    echo -e "\n${YELLOW}⏹️  Arrêt des serveurs...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✅ Serveurs arrêtés proprement.${NC}"
    exit 0
}

# Capture Ctrl+C pour arrêter proprement
trap cleanup SIGINT SIGTERM

# Vérifier si node est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé. Veuillez l'installer.${NC}"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm n'est pas installé. Veuillez l'installer.${NC}"
    exit 1
fi

# Installation des dépendances si nécessaire
echo -e "${YELLOW}📦 Vérification des dépendances...${NC}"

# Backend
if [ ! -d "backend/node_modules" ]; then
    echo -e "${YELLOW}📥 Installation des dépendances backend...${NC}"
    cd backend && npm install && cd ..
fi

# Frontend
if [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}📥 Installation des dépendances frontend...${NC}"
    cd frontend && npm install && cd ..
fi

echo -e "${GREEN}✅ Dépendances vérifiées.${NC}\n"

# Démarrage du Backend
echo -e "${BLUE}🔧 Démarrage du Backend (port 3001)...${NC}"
cd backend
npm start &
BACKEND_PID=$!
cd ..

# Attendre un peu que le backend démarre
sleep 2

# Démarrage du Frontend
echo -e "${BLUE}🎨 Démarrage du Frontend (port 5173)...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Attendre un peu que le frontend démarre
sleep 3

echo -e "\n${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║       ✅ Serveurs démarrés !           ║"
echo "╠════════════════════════════════════════╣"
echo "║  🎨 Frontend: http://localhost:5173    ║"
echo "║  🔧 Backend:  http://localhost:3001    ║"
echo "╠════════════════════════════════════════╣"
echo "║  Appuyez sur Ctrl+C pour arrêter       ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Attendre que les processus se terminent
wait $BACKEND_PID $FRONTEND_PID

