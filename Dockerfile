FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

ENV VITE_IS_DOCKER=true
ENV VITE_ENV=development
ENV VITE_APP_NAME="React Template"
ENV VITE_APP_STORAGE_PREFIX=template

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

# Startup command

# yarn build --mode <env long-form>

# docker build -t template-frontend .
