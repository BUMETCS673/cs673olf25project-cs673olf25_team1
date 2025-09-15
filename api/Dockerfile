# api/Dockerfile

# Use a Node base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app 

# Install dependencies
COPY package*.json ./

# Distinguish environment (Development vs Production)
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Install devDependencies in dev, only production deps in prod
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm ci --only=production; \
    else \
        npm install; \
    fi

# Copy source code
COPY . .

# Dev stage
FROM base AS development
RUN npm install --include=dev
EXPOSE 3000
CMD ["npx", "nodemon", "src/index.js"]

# Prod stage
FROM base AS production
# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000
CMD ["npm", "start"]