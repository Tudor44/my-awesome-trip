# Travel App Makefile
.PHONY: help build up down restart logs clean dev

# Default target
help:
	@echo "Travel App Docker Commands:"
	@echo "  make build     - Build the Docker image"
	@echo "  make up        - Start the application"
	@echo "  make down      - Stop the application"
	@echo "  make restart   - Restart the application"
	@echo "  make logs      - View application logs"
	@echo "  make clean     - Stop and remove containers/images"
	@echo "  make dev       - Start development server with hot reload"
	@echo "  make open      - Open app in browser"

# Build the Docker image
build:
	docker-compose build

# Start the application
up:
	docker-compose up -d
	@echo "Travel app running at: http://localhost:3000/index_new.html"

# Stop the application
down:
	docker-compose down

# Restart the application
restart: down up

# View logs
logs:
	docker-compose logs -f

# Clean up everything
clean:
	docker-compose down --rmi all --volumes --remove-orphans
	docker system prune -f

# Start development server with hot reload
dev:
	docker-compose --profile dev up -d dev-server
	@echo "Development server running at: http://localhost:8080"

# Open app in browser
open:
	open http://localhost:3000/index_new.html

# Health check
health:
	docker-compose ps
	curl -f http://localhost:3000/index_new.html > /dev/null && echo "App is healthy" || echo "App is not responding"