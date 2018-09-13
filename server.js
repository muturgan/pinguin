const server = require('http').createServer();
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8888;

io.on('connection', (socket) => {
    const interval = setInterval(() => {
        socket.emit('pinguin', 'Dmitry Guselnikov is a man');
        console.log('the ping was sent');
    }, 4000);

    socket.on('disconnect', () => {
        clearInterval(interval);
    });
});

server.listen(PORT, () => {
    console.log(`pinguin listening on ${ PORT }`);
});