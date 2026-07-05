let http = require('http');

let server = http.createServer(function (req, res) {
    res.write('Hello World');
    res.end();

    //res.end('Hello World');
});

server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});