# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to the container
COPY . .

# Build the app
RUN npm run build

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the app
CMD ["npm", "run", "start"]
