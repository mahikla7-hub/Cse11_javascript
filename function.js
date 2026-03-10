var age = 20;
if (age > 18) { //if statement
    document.write("<br>You are eligible to vote.</br>");
}

let age = 20;
if (age >= 18) { //if else statement
    console.log("You are an adult.");

} else {
    console.log("You are a minor.");
}
var grade = 'A'; //switch case
document.write("Entering switch block</br>");
switch (grade) {
    case 'A':
        document.write("Good Job</br>");
        break;

    case 'B':
        document.write("Pretty Good</br>");
        break;
    case 'C':
        document.write("Passed</br>");
        break;
    case 'D':
        document.write("Not Good</br>");
        break;
    case 'F':
        document.write("Failed</br>");
        break;
    default:
        document.write("Unknown Grade</br>")
}
document.write("Exiting switch block.");

function myFunction() { //function
    alert("Hello World!");
}
function sayHello(name, age) {
    document.write(name + "is" + age + "years old.");
}



//normal function
const res = mul(12, 30);
function mul(x, y) {
    return x * y;
}
document.write(res);
document.write("</br>")


//arrow functions
var add2 = (a, b) => document.write(a + b);
add2(10, 20);




//collection
let collection = [
    {},
    [],
    true,
    "john",
    function () { },
    90009898293,
    undefined,
    null,
    new String("abc"),
    new Date(),
];
collection.teachername = "John Mac";
collection.phonenumber = 9657827732;
console.log(collection);
document.write(collection[5]);

