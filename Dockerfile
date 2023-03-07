# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production version of the app
RUN npm run build

# Expose port 80
EXPOSE 5000

# Start the Nginx server
CMD ["npm", "start"]
