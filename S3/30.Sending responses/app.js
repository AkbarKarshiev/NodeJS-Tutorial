const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node JS tutorial</title></head>');
  res.write('<body><h1>Hello my first node JS app!</h1></body>');
  res.write('<html>');
  res.end();
  process.exit();
});

server.listen(3000);