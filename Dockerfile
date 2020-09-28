FROM node:12

ARG PORT=3000

WORKDIR /node

# Make the cache work
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD npm run server