FROM node:16.15.1 as build
WORKDIR /vidicaweb

COPY package*.json ./
RUN npm install
COPY . ./

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /vidicaweb/build /usr/share/nginx/html