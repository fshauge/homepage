FROM node as builder
COPY . .
RUN yarn && yarn build

FROM builder
FROM nginx
COPY build /usr/share/nginx/html
