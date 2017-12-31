
var fs = require("fs");

var files = {};

files.get_contents = (filename,handle,encoding="UTF8")=>{
    var readStream = fs.createReadStream(filename);
    var data = '';
    if(encoding == undefined){
        encoding = "UTF8";
    }
    readStream.setEncoding(encoding);
    readStream.on("data",function(part){
        data += part;
    });
    readStream.on("end",function(){
        handle!=undefined&&typeof(handle)=="function"?handle(data):'';
    });
    return true;
};

files.put_contents = (filename,content,handle,encoding="UTF8")=>{
    var writeStream = fs.createWriteStream(filename);
    if(encoding == undefined){
        encoding = "UTF8";
    }
    writeStream.write(content,encoding);
    writeStream.end();
    writeStream.on("finish",function(){
        handle!=undefined&&typeof(handle)=="function"?handle(1):'';
    });
    return true;
};

module.exports  = files;