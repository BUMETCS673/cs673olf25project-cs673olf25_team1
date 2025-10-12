# 🐳 Docker Setup Guide

This guide explains how to build, run, and manage the application using Docker and Docker Compose. Currently set up for development. 

---

## 📦 Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Project source code cloned to your local machine

---

## 🚀 Getting Started

### 1. Build containers (no cache)
To ensure you always have the latest dependencies and changes:
```bash
docker-compose build --no-cache
```

### 2. Start application
Run all services defined in docker-compose.yml

```bash
docker-compose up
```

The backend will be available at http://localhost:3000

The frontend will be available at http://localhost:8000

### 3. Stop Application
To stop and remove containers, networks, and related resources:

```bash
docker-compose down
```

### Common Developer Commands

1. Rebuild containers after code changes
```bash
docker-compose build --no-cache
```

2. View logs 
```bash
docker-compose logs -f
```

3. Open a shell in running container
```bash
docker-compose exec backend sh
```

4. List all containers
```bash
docker ps
```

5. Remove unused images and containers
```bash
docker system prune -f
```