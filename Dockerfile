# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine AS production

WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]