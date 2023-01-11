FROM node:13.12.0-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npx browserslist@latest --update-db

COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/web/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
