var http = require('http');
var electron = require('electron');

console.log(electron);

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
