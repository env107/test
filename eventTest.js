var event = require("events");

var eventEmitter = new event.EventEmitter();

var sqlConnetion = (host,username,pwd,dbname,port="3306")=>{
    console.log("连接数据库:"+host+":"+port+";username="+username+";password="+pwd+";dbname="+dbname);
    eventEmitter.emit("success");
};

//绑定事件
eventEmitter.on("dbconnect",()=>{
    sqlConnetion('127.0.0.1','root','123113','test');
});

eventEmitter.on("success",function(){
    console.log("数据库连接成功!");
});

eventEmitter.emit("dbconnect");


//addEventListener :为某个事件添加监听器到监听器数组中
//on:添加事件监听
//once:添加事件监听（仅一次），触发后被解除
//removeListener：移除监听，event事件名，listener:移除后回调
//removeAllListeners：移除所有事件监听，如果指定事件，则移除该事件的监听器
//setMaxListeners：设置最大事件的监听器数
//listeners 监听器数组
//emit(event, [arg1], [arg2], [...]) 触发，若干个参数
//	listenerCount(emitter, event) 返回某个事件的监听器数 ---类方法 如： require('events').EventEmitter.listenerCount(eventEmitter,'connection');
