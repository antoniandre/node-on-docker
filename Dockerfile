FROM node:carbon

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]