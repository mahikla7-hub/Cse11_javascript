console.log("Hello World");
document.write("Hello World");
document.write("<br/>");

var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Sanjiv Soni";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));

//Reference(object)type

//function
var sayHello=function(){
    alert("hello world!");
}

//array
var numbersArray=[1,2,3];
var animals=new Array("cat","dog","mouse","lion");

//object
var person={
    name:'Barack Hussein Obama',
    age:'51',
}

const sym1=Symbol(4)
console.log(sym1);
const sym2=Symbol(4)
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false")//because each symbol is unique
}

var count;
document.write("Starting Loop"+"<br/>");
for(count=0;count<10;count++){
    document.write("Current Count:"+count);
    document.write("<br/>");
}

document.write("Loop stopped");