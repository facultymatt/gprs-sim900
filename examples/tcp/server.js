var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('Hello\r\n');
  socket.write('This is your Tessel talking\r\n');
  socket.write('I\'m opening a pipe with you...\r\n');
  socket.pipe(socket);
});

server.listen(1337);

console.log('Tessel listening on...?');
