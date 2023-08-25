FROM node:18-alpine as builer

WORKDIR /app
COPY . .
RUN npm i --force && npm run build

CMD ["npm", "run", "start"]