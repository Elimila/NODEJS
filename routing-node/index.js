const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const route = parsedUrl.pathname === '/' ? 'home' : parsedUrl.pathname.slice(1);
  const filePath = path.join(__dirname, 'pages', `${route}.html`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'pages', 'notFound.html'), (error, notFoundData) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFoundData);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log('Servidor en http://localhost:8080');
});
