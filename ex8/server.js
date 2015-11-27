var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  request.on('readable', function() {
    var data = null;
    while(null !== (data = request.read())) {
      console.log(data.toString());
    }
  });
  request.on('end', function() {
    response.end();
  });
}).listen(8080, function() {
  console.log('Listening on port 8080...');
});