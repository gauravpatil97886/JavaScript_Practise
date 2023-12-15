const http = require('http');x

const server = http.createServer((req, res) => {
  const clientIP = req.connection.remoteAddress;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Your IP address is: ${clientIP}`);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});


