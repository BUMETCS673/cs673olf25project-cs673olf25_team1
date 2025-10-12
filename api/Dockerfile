# api/Dockerfile

# Base image
FROM node:20-alpine AS base
WORKDIR /app

RUN apk add --no-cache bash g++ make python3

# Install dependencies
COPY package*.json ./
# RUN npm install
RUN npm install --legacy-peer-deps --include=dev

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Use environment variable to choose dev vs prod
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV HOST=0.0.0.0
ENV PORT=3000
ARG GROQ_API_KEY
ARG JWT_SECRET
ENV GROQ_API_KEY=$GROQ_API_KEY
ENV JWT_SECRET=$JWT_SECRET

# Build
RUN npm run build

#Run
CMD ["node", "dist/src/main.js"]