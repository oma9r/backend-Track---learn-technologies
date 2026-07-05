let http = require('http');

let server = http.createServer(function (req, res) {

    let body = 'Hello World1';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.write(body);

    res.write('Hi there, i change myself!');

    res.end();

    //res.end('Hello World');
});

server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});