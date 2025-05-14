# Stage 1: Build the Angular app
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Accept build environment (default: prod)
ARG ENV=prod

# Run build for the passed environment
RUN npm run build --configuration=$ENV

# Stage 2: Serve with nginx
FROM nginx:alpine

# Use environment to decide which dist folder to copy
ARG ENV=prod

# Copy compiled Angular app to nginx html folder
COPY --from=build /app/dist/your-app-name-${ENV} /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
