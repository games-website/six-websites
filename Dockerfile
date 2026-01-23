# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Build Vite app
RUN npm run build


# ---------- Production Stage ----------
FROM node:20-alpine

WORKDIR /app

# Install static server
RUN npm install -g serve

# Copy built app from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Serve static files
CMD ["serve", "-s", "dist", "-l", "3000"]
