# Use the latest version of Ubuntu as the base image
FROM ubuntu:latest

# Update the package list and install necessary dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    libssl-dev \
    pkg-config \
    net-tools 

# Install Rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Add Rust to the system path
ENV PATH="/root/.cargo/bin:${PATH}"

# Create a new directory to store the Actix-web application
RUN mkdir /server
WORKDIR /server

# Copy the source code into the container
COPY . .

# Build the Actix-web application
RUN cargo build --release

# Make sure binary is executable
RUN chmod +x /server/target/release/server

# Expose the port that the Actix-web application listens on
EXPOSE 8080

# Init systemd process and then start the Actix-web application 
CMD ["./target/release/server"]
