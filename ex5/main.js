var Emitter = require('./emitter');

var name = "Mateus";

var emitter = new Emitter(name);

emitter.emit('open', name);