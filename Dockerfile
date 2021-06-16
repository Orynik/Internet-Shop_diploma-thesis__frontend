FROM node:12-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org/ --global
RUN npm install --only=prod
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]