# 1️⃣ Use a builder image to install dependencies and build the app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only package.json and lock file to cache dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the entire project and build it
COPY . .
RUN npm run build

# 2️⃣ Use a lightweight production image
FROM node:20-alpine

WORKDIR /app
ENV PORT=3000

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Use Next.js's recommended start command
CMD ["npm", "run", "dev"]
