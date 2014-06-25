var util = require('util');
var EventEmitter = require('events').EventEmitter;

// @param myPacketizer, packetizer to listen to
function PostmasterSimple(myPacketizer) {
  var self = this;
  self.packetizer = myPacketizer;
  self.uart = myPacketizer.uart;
  self.packetizer.on('packet', function(data) {
    self.emit('packet', data);
  });
}

util.inherits(PostmasterSimple, EventEmitter);

PostmasterSimple.prototype.sendSimple = function(message) {
  var self = this;
  self.uart.write(message);
  self.uart.write('\r\n');
};

// used by chain only, when we are deep in the chain and it breaks
PostmasterSimple.prototype.forceClear = function(typ) {};

module.exports = PostmasterSimple;
