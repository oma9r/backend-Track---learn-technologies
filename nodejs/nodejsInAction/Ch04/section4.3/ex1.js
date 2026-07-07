let http = require('http');
let parse = require('url').parse;
let join = require('path').join;

let fs = require('fs');

let root = __dirname;

let server = http.createServer(function (req, res) {
    let url = parse(req.url);
    let path = join(root, url.pathname);
    let stream = fs.createReadStream(path);

    stream.on('data', function (chunk) {
        res.write(chunk);
    });

    stream.on('end', function () {
        res.end();
    });
});

server.listen(3000, function () {
    console.log("Server is running in port 3000");
});