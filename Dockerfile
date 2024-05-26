FROM node:18.17.0-alpine

ARG NEXTAUTH_SECRET=default_key_id
ENV NEXTAUTH_SECRET=${NEXTAUTH_SECRET}

COPY package.json ./

RUN rm -rf node_modules package-lock.json yarn.lock

RUN yarn install && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN yarn build

CMD ["npm", "run", "start"]
