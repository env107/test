var http = require("http");
var util = require("util");
var url = require("url");
var fs = require("fs");


http.createServer(function(req,res){

   var filename =  url.parse(req.url).pathname.substr(1);

    fs.readFile(filename,function(err,data){
                if(err){
                    console.log(err);
                    res.writeHead(404,{"Content-type":"text/html"});
                }else{
                    res.writeHead(200,{"Content-type":"text/html"});
                    res.write(data.toString());
                }
                res.end();
            });



}).listen(8000);