# chit-chat-ui/Dockerfile

# Base image
FROM node:20-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose port for dev
EXPOSE 8000

# Use NODE_ENV to distinguish dev vs prod
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Build for production
RUN if [ "$NODE_ENV" = "production" ]; then \
      npm run build; \
    fi

# CMD: dev uses Vite dev server, prod uses Nginx
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then nginx -g 'daemon off;'; else npm run dev -- --host 0.0.0.0 --port 3000; fi"]