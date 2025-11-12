# Docker Setup for NID Form Application

This document provides instructions for running the NID Form application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (optional, for using docker-compose)

## Quick Start

### Using Docker Compose (Recommended)

1. Build and start the application:
   ```bash
   docker-compose up -d
   ```

2. Access the application at http://localhost:3000

3. Stop the application:
   ```bash
   docker-compose down
   ```

### Using Docker Commands

1. Build the Docker image:
   ```bash
   docker build -t nid-form-app .
   ```

2. Run the container:
   ```bash
   docker run -d -p 3000:3000 --name nid-form nid-form-app
   ```

3. Access the application at http://localhost:3000

4. Stop the container:
   ```bash
   docker stop nid-form
   ```

5. Remove the container:
   ```bash
   docker rm nid-form
   ```

## Image Optimization

The Dockerfile uses a multi-stage build process to create a minimal production image:

- **Stage 1 (deps)**: Installs production dependencies only
- **Stage 2 (builder)**: Builds the Next.js application
- **Stage 3 (runner)**: Creates the final minimal runtime image

The final image:
- Uses Alpine Linux for minimal size (~100-150MB)
- Runs as a non-root user for security
- Only includes production dependencies
- Uses Next.js standalone output mode

## Environment Variables

You can customize the application by setting environment variables in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_TELEMETRY_DISABLED=1
  - PORT=3000
```

## Health Check

The Docker Compose setup includes a health check that monitors the application's availability. The container will be marked as healthy once the application responds to HTTP requests.

## Logs

View logs using:

```bash
# Docker Compose
docker-compose logs -f

# Docker
docker logs -f nid-form
```

## Rebuild After Changes

If you make changes to the code:

```bash
# Docker Compose
docker-compose up -d --build

# Docker
docker build -t nid-form-app .
docker stop nid-form && docker rm nid-form
docker run -d -p 3000:3000 --name nid-form nid-form-app
```
