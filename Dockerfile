FROM node:18

# Setworking directory
WORKDIR /usr/src/app

# Copy the application code to the container
COPY . .

# Install the app dependencies
RUN npm install

# Compile TypeScript files to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 8500

# Command to run the app
CMD ["node", "dist/server.js"]