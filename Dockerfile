# Use NodeJS base image
FROM node:18-alpine AS builder

# Argument to cache npm dependencies
ARG CACHE_DATE=not_a_date

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies and build project
RUN pnpm i && pnpm build

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

# Copy only the relevant build files and not all the files from the working directory
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.cjs .

# Start the server
CMD [ "node", "server.cjs" ]
