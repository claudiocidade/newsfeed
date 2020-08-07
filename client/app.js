const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.APP_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World (CLIENT)');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});