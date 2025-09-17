# api/Dockerfile

# Deps
FROM node:20-alpine AS deps
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Development
FROM node:20-alpine AS development
WORKDIR /app

ENV NODE_ENV=development
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npx", "nodemon", "src/main.ts"]

# Production
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["node", "dist/main.js"]