var net = require('net');
var client = new net.Socket();

//var IP = '172.16.31.170';
var IP = 'www.sp-tcp-server-demo.nodejitsu.com';

client.connect(80, IP, function(err) {
  console.log(err);
  console.log('Local machine connected to Tessel');
  client.write('Hello, Tessel! Love, Local machine.');
});
 
client.on('data', function(data) {
  console.log('Received: ' + data);
  //client.destroy(); // kill client after server's response
});
 
client.on('close', function() {
  console.log('Connection closed');
});