let event= require("events");
var em = new event.EventEmitter();

em.once("firstevent",function (data){
    console.log('fristevent callback:'+ data);
});

// fire the event 

em.emit('firstevent','this event is emitter');
console.log("fire the event again");
em.emit("fristevent","this is event emmiter ");