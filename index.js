const PORT = 4000;
const HOST = '0.0.0.0';

// USING EXPRESS.
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => {
// 	res.send(`Hello ${process.platform}`);
// });

// app.listen(PORT, HOST);
// console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}.`);


// WITHOUT EXPRESS.
const http = require('http');

function requestHandler(req, res) {
	res.end(`Hello ${process.platform}`);
}

const server = http.createServer(requestHandler);

server.listen(PORT, function() {
	console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}.`);
});