var obj={
    name:"shubham",
    getname :function(){
        var self=this;
        setTimeout(function(){
            console.log("timeout="+self.name);
        },1000);
    

    console.log("outside="+this.name);
    }
}
obj.getname();

// ES6

var obj={
    name:"shubham padule",
    getname:function(){
        setTimeout(()=>{
            console.log("timeout="+this.name);
        },1000);
        console.log("outside="+this.name);    
}
}