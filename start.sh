#!/bin/bash

# ===========================================
# Script de démarrage du Portfolio BTS SIO
# ===========================================

# Couleurs pour le terminal
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════╗"
echo "║     🚀 Portfolio BTS SIO Launcher      ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Fonction pour arrêter les processus à la fermeture
cleanup() {
    echo -e "\n${YELLOW}⏹️  Arrêt du serveur...${NC}"
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✅ Serveur arrêté proprement.${NC}"
    exit 0
}

# Capture Ctrl+C pour arrêter proprement
trap cleanup SIGINT SIGTERM

# Vérifier si node est installé
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js n'est pas installé. Veuillez l'installer.${NC}"
    exit 1
fi

# Installation des dépendances si nécessaire
echo -e "${YELLOW}📦 Vérification des dépendances...${NC}"

if [ ! -d "frontend/node_modules" ]; then
    echo -e "${YELLOW}📥 Installation des dépendances...${NC}"
    cd frontend && npm install && cd ..
fi

echo -e "${GREEN}✅ Dépendances vérifiées.${NC}\n"

# Démarrage du Frontend
echo -e "${BLUE}🎨 Démarrage du serveur de développement...${NC}"
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

# Attendre que le serveur démarre
sleep 3

echo -e "\n${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║       ✅ Serveur démarré !             ║"
echo "╠════════════════════════════════════════╣"
echo "║  🌐 URL: http://localhost:5173         ║"
echo "╠════════════════════════════════════════╣"
echo "║  Appuyez sur Ctrl+C pour arrêter       ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Attendre que le processus se termine
wait $FRONTEND_PID
