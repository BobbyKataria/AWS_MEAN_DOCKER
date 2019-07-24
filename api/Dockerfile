FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
COPY . /app
EXPOSE 8080
ENTRYPOINT ["./entrypoint.sh"]
