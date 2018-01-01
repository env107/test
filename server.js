var http = require("http");
var util = require("util");
var url = require("url");
var querystring = require("querystring");


http.createServer(function(request,response){

    response.writeHead(200,{"Content-type":"text/html;charset=utf8"});
    var data = '';
    var posthtml = 
    "<form name='' method='POST'>"+
    "输入名字:<input type='text' name='name' value='' />"+
    "输入年龄:<input type='number' name='age' /><input type='submit' value='提交' /></form>";
    //get
    // var urlobj = url.parse(request.url);
    // var log = util.inspect(urlobj,true);

    //post
    request.on("data",function(chunk){
        data += chunk;
    });
    request.on("end",function(){
        var info = querystring.parse(data);
        response.write(util.inspect(info,true));
        if(info.name && info.age){
             response.write("<span>请求数据：</span>");
             response.write(util.inspect(info,true));
        }else{
            response.write(posthtml);
        }

        response.end();
       
    });

   
    
}).listen(3000);


