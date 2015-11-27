var winston = require('winston');
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level: 'silly',
        colorize: true,
        timestamp: function() {
          return (new Date()).toISOString();
        }
      })
    ]
  });

var myClasss = function(string) {
  var _name = string;

  this.prints = function() {
    logger.info(_name + ' is a string');
  };

}

module.exports = myClasss;