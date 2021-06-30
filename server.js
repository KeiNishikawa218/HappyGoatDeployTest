var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;

  if ('/' == pathname) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }

  if ('/showletter' == pathname) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }

  if ('/accessToDatabaseAPI' == pathname) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }

});

server.listen(3000, function() {
    console.log('listening on port 3000');
});