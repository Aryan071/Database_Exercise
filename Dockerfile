FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
EXPOSE 5000
CMD node app.js 