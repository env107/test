var http = require("http");

http.createServer(function(request,response){

    response.writeHead(200,{"Content-type":"text/plain"});

    response.end("hello again nodejs");
    
}).listen(3000);


