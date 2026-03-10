//normal function
const res=mul(12,30);
function mul(x,y)
{
    return x*y;
}
document.write(res);
document.write("</br>")


//arrow functions
var add2 = (a,b)=> document.write(a+b);
add2(10,20);




//collection
let collection= [
    {},
    [],
    true,
    "john",
    function(){},
    90009898293,
    undefined,
    null,
    new String("abc"),
    new Date(),
];
collection.teachername="John Mac";
collection.phonenumber=9657827732;
console.log(collection);
document.write(collection[5]);

