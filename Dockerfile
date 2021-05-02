# Use Node LTS
FROM node:latest

# Create Working Directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Copy Files
COPY . ./

# Build React App
RUN npm run build

# Expose Default Node App Port
EXPOSE 3000

# RUN APP
CMD ["npm","run", "server"]
