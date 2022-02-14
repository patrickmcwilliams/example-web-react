FROM node:12.22.10-alpine3.15
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
CMD ["npm", "run", "start"]