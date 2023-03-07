# Use the latest version of Ubuntu as the base image
FROM ubuntu:latest

# Update the package list and install necessary dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    libssl-dev \
    pkg-config \
    net-tools 

# Create a new directory to store the Svelte application
RUN mkdir /app
WORKDIR /app

# Copy the source code into the container
COPY . .
