var files = require("./module/files"); 
files.get_contents("input.txt",function(data){
    console.log("文件内容:"+data);
    files.put_contents("output.txt",data);
});