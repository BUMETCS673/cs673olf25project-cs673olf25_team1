# api/Dockerfile

# Base image
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
# RUN npm install
RUN npm install --legacy-peer-deps --include=dev

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Use environment variable to choose dev vs prod
ARG NODE_ENV=test
ENV NODE_ENV=${NODE_ENV}

# Build for production if NODE_ENV=production
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Dev: run ts-node, Prod: run compiled JS 
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'test' ]; then npm test; elif [ \"$NODE_ENV\" = 'production' ]; then node dist/main.js; else npx ts-node src/main.ts; fi"]
