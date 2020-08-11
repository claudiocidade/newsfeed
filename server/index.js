const http = require('http');

const port = process.env.APP_PORT || 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World (SERVER)');
});

server.listen(port, () => {
  console.log(`Listen on port ${port}`);
});