# # Use an official Node runtime as the base image
# FROM node:20

# # Set the working directory in the container to /app
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install any needed packages specified in package.json
# RUN npm install

# RUN npm install -g nodemon

# # Bundle app source inside Docker image 
# COPY . .

# # Make port 3000 available to the world outside this container
# EXPOSE 5000

# # Run the app when the container launches
# CMD ["npm", "run", "dev"]

## frontend

# Use an official Node runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install
RUN npm install -g serve

# Bundle app source inside Docker image 
COPY . .

RUN npm run build 

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["serve" , "-s", "build"]