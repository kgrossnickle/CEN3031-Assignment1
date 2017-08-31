var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if(request.url=="/listings"){
    response.end(listingData);
  }
  else{
    response.writeHead(404, {
        "Content-Type": "text/plain"
    });
    response.write("Bad gateway error");
    response.end();
    return;
  }
  

};


server = http.createServer(requestHandler);
  server.listen(port, function() {
    //once the server is listening, this callback function is executed
    console.log('Server listening on: http://127.0.0.1:' + port);
  });


fs.readFile('listings.json', 'utf8', function(err, data) {
  listingData = data;
});

