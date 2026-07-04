const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

// -------------------- JOIN --------------------
channel.on('join', function (id, client) {

    const welcome =
        "Welcome!\n" +
        "Guests online: " + Object.keys(this.clients).length;

    client.write(welcome + "\n");

    this.clients[id] = client;

    // Arrow function keeps "this" pointing to channel
    this.subscriptions[id] = (senderId, message) => {
        if (id !== senderId) {
            this.clients[id].write(message);
        }
    };

    this.on('broadcast', this.subscriptions[id]);

    channel.emit('broadcast', id, id + " has joined the chat.\n");
});

// -------------------- LEAVE --------------------
channel.on('leave', function (id) {

    channel.removeListener(
        'broadcast',
        this.subscriptions[id]
    );

    delete this.clients[id];
    delete this.subscriptions[id];

    channel.emit('broadcast', id, id + " has left the chat.\n");
});

// -------------------- SHUTDOWN --------------------
channel.on('shutdown', function () {

    channel.emit('broadcast', '', "Chat has shut down.\n");

    channel.removeAllListeners('broadcast');
});

// -------------------- SERVER --------------------
const server = net.createServer(function (client) {

    const id = client.remoteAddress + ":" + client.remotePort;

    // The client is already connected
    channel.emit('join', id, client);

    client.on('data', function (data) {

        data = data.toString();

        if (data.trim() === "shutdown") {
            channel.emit('shutdown');
            return;
        }

        channel.emit('broadcast', id, id + ": " + data);
    });

    client.on('close', function () {
        channel.emit('leave', id);
    });

    client.on('error', function (err) {
        console.log(err.message);
    });

});

server.listen(8888, function () {
    console.log("Chat server listening on port 8888");
});