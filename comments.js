// Create web server application using Node.js
// To run this file, type "node comments.js" in the terminal

// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {
    // content header
    res.writeHead(200, { 'content-type': 'text/plain' });

    // write message and signal communication is complete
    res.end('Hello, World!\n');
}).listen(8124);

console.log('Server running on 8124/');

// To run this file, type "node comments.js" in the terminal
// Then, open a browser and go to http://localhost:8124
// You will see the message "Hello, World!" displayed in the browser
// To stop the server, type "Ctrl + C" in the terminal
