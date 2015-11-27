var http = require('http');

var options = {
  host: 'localhost',
  port: 8080,
  path: '/',
  method: 'POST'
};

var request = http.request(options, function(response) {
  response.on('data', function() {
    console.log(data);
  });
});

request.write('Are you alive?');
request.end();