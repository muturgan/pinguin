const server = require('http').createServer();
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8888;

io.on('connection', (socket) => {
    const interval = setInterval(() => {
        socket.emit('pinguin', 'Dmitry Guselnikov is a man');
    }, 4000);

    socket.on('disconnect', () => {
        clearInterval(interval);
    });

    socket.on('testing event', (data) => {
        socket.emit('testing success', {overheared: data.message, reaction: 'fuck yeah!'});
    });
});

server.listen(PORT, () => {
    console.log(`pinguin listening on ${ PORT }`);
});