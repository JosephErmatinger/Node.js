var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('HTTP request has been made to the Node.js server at port 8081!\n');
}).listen(8081);

// Console will print the message
console.log('Node.js server is now active and running at http://127.0.0.1:8081/');