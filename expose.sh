#!/bin/bash

# Travel App External Exposure Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Travel App External Access Setup${NC}"
echo "========================================"

# Get local IP
LOCAL_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | head -1 | awk '{print $2}')

if [ -z "$LOCAL_IP" ]; then
    echo -e "${RED}❌ Could not determine local IP address${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Your local IP address: ${LOCAL_IP}${NC}"

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker first.${NC}"
    exit 1
fi

# Start the application
echo -e "${YELLOW}🐳 Starting travel app container...${NC}"
docker-compose up -d

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Travel app is running!${NC}"
    echo ""
    echo -e "${BLUE}📱 Access your app:${NC}"
    echo -e "   Local:    http://localhost:3000/index_new.html"
    echo -e "   Network:  http://${LOCAL_IP}:3000/index_new.html"
    echo ""
    echo -e "${YELLOW}📋 Share these URLs with others on your network:${NC}"
    echo -e "   Production: http://${LOCAL_IP}:3000/index_new.html"
    echo -e "   Original:   http://${LOCAL_IP}:3000/index.html"
    echo -e "   Test:       http://${LOCAL_IP}:3000/test_standalone.html"
    echo ""
    echo -e "${BLUE}🛠️ Management commands:${NC}"
    echo -e "   Stop:     make down"
    echo -e "   Restart:  make restart"
    echo -e "   Logs:     make logs"
    echo ""
    echo -e "${GREEN}🎉 App is ready for external access!${NC}"
else
    echo -e "${RED}❌ Failed to start the application${NC}"
    exit 1
fi