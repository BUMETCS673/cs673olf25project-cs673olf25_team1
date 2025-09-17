# chit-chat-ui/Dockerfile

# Deps
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./

# Install dependencies 
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

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]