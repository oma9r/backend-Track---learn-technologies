let http = require('http');

let server = http.createServer(function (req, res) {

    req.on('data', function (chunk) {
        console.log('parsed', chunk);
    });

    req.on('end', function () {
        console.log('done parsing');
        res.end();
    });
});

server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});