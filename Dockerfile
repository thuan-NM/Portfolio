# Stage 1: Use a lightweight nginx image
FROM nginx:alpine

# Remove the default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the static files from the project to the nginx web server directory
COPY index.html /usr/share/nginx/html/
COPY public/js/ /usr/share/nginx/html/js/
COPY styles/ /usr/share/nginx/html/styles/
COPY src/ /usr/share/nginx/html/src/

# Expose port 80 to the outside world
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
