# How to create a simple docker container with node js

2 ways:

## 1. with Express

   _Package.json_
   ```json
   {
       "name": "...",
       "version": "...",
       "description": "...",
       "author": "...",
       "main": "...",
       "scripts": {
           "start": "NODE_ENV=production node index.js"
       },
       "dependencies": {
           "express": "^4.16.1"
       }
   }
   ```

   _index.js_
   ```js
   const express = require('express');

   const PORT = 4000;
   const HOST = '0.0.0.0';

   const app = express();
   app.get('/', (req, res) => {
       res.send(`Hello ${process.platform}`);
   });

   app.listen(PORT, HOST);
   console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}.`);
   ```


## 2. without Express

   _Package.json_
   ```json
   {
       "name": "...",
       "version": "...",
       "description": "...",
       "author": "...",
       "main": "...",
       "scripts": {
           "start": "NODE_ENV=production node index.js"
       }
   }
   ```

   _index.js - Don't need express._
   ```js
   var http = require('http');

   const PORT = 80;

   function requestHandler(req, res) {
       res.end(`Hello ${process.platform}`);
    }

   var server = http.createServer(requestHandler);

   server.listen(PORT, function(){
       console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}.`);
   });
   ```

## A more complete Dockerfile

```
FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
```