# Use NodeJS base image
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm i

COPY . .

RUN pnpm build

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

# Copy only the relevant build files and not all the files from the working directory
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.cjs .

# Start the server
CMD [ "node", "server.cjs" ]
