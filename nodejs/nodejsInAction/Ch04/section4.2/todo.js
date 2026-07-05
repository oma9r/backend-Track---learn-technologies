let http = require('http');
let url = require('url');
let items = [];

let server = http.createServer(function (req, res) {

    switch (req.method) {
        case 'POST':
            let item = '';
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push(item);
                res.end('OK\n');
            });
            break;

        case 'GET':
            // version 1 of GET handler
            // items.forEach(function (item, i) {
            //     res.write(i + ') ' + item + '\n');
            // });
            // res.end();

            // second version of GET handler - optimzied version
            let body = items.map(function (item, i) {
                return i + ') ' + item;
            }).join('\n');

            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset = "utf-8"');
            res.end(body);
            break;
    }
});

server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});