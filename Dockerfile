FROM node:18-alpine AS base

# Set the working directory to /app
WORKDIR /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Build the application for production
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Set the default command to start the application
CMD ["npm", "start"]