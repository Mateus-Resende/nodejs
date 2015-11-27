// var EventEmitter = require('events').EventEmitter;

// var emitterClass = function(string) {
//   var log = new EventEmitter();

//   setTimeout(function() {
//     self.emit
//   })

//   log.on('print', function(message) {
//     console.log('Print: ' + message);
//   });

// }

// module.exports = emitterClass;

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var myEmitter = function(name) {
  var _string = name;
  var self = this;

  self.on('open', function(_string) {
    console.log(_string);
  });
};

util.inherits(myEmitter, EventEmitter);

module.exports = myEmitter;