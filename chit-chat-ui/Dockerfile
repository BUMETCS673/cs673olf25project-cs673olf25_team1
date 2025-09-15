# chit-chat-ui/Dockerfile

# Base Node image
FROM node:20-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Distinguish environment (Development vs Production)
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Install dependencies
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm ci; \
    else \
        npm install; \
    fi

# Copy source code
COPY . .

# Development Stage
FROM base AS development
# Expose port for Vite dev server
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:alpine AS production
# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]