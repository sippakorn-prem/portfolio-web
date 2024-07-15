FROM node:20.12.2-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
RUN mkdir /app
WORKDIR /app
ADD package*.json ./
COPY . /app
RUN npm install -g npm@latest
RUN npm install

# Stage 2: Build the application
FROM deps AS build
COPY . . 
RUN npm run build

# Stage 3: Final image
FROM base AS runtime
WORKDIR /app
COPY --from=build /app /app
CMD ["npm", "run", "start:prod"]