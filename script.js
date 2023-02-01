//rest
function sum(name,...rest)
{
    console.log(name);
    console.log(rest);
    for(let i in rest)
    {
        let res
        res=res+rest[i];
        return rest;
    }
}
sum("cvr",1,3,6,9)
let obj={
    name:"rishi",
    age:20
}
console.log(obj);
let obj1={
    na:"rishi",
    age1:20,
    display:function(){
       return this.na+" "+this.age1;
    }
}
console.log(obj1.display());
let obj2={
    nam:"rishi",
    age2:20,
    display:function(){
       return `${this.nam} 
and
${this.age2}`;
    }
}
console.log(obj2.display());

//asynchronous function
let na3="rishi"
let a=90
let obj3={
    na3,
    a,
    display:function(){
        that=this;
       console.log(this);
       setTimeout(function(){
        console.log("asynchronous function");
        console.log("inside",that.a);
       },2000);
    }
}
obj3.display();

//bind
let na4="rishi"
let ag=90
let obj5={
    na4,
    ag,
    display:function(){
       console.log(this);
       setTimeout(function(){
        console.log("bind");
        console.log("inside",this.na4);
       }.bind(this),2000);
    }
}
obj5.display();

//arrow
let na5="rishi"
let ag3=90
let obj4={
    na5,
    ag3,
    display:function(){
       console.log(this);
       setTimeout(()=>{
        console.log("arrow");
        console.log("inside",this.ag3);
       },2000);
    }
}
obj4.display();