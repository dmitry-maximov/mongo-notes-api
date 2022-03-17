FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 5000

RUN npm install

COPY . .

CMD ["npm", "run", "start"]