const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const ROOT = __dirname;

const server = http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);

  // Security: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Try exact path, then try as directory with index.html
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (stats && stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      } else {
        // Not found - serve 404.html
        filePath = path.join(ROOT, '404.html');
      }
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
        return;
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2'
      };
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`🎂 Blissful Bitee site running at http://localhost:${PORT}`);
  console.log(`📂 Serving from: ${ROOT}`);
  console.log(`\nPress Ctrl+C to stop.`);
});
