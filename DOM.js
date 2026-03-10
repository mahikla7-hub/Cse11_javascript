//get elements by ID
const result = document.getElementById("para");
result.innerHTML="Hello,World!";
result.title="myname";
console.log(result);

//selecting by class name
const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="Mahi";
x[1].innerHTML="Shukla";
console.log(x);

//selecting by tag name
const result3=document.getElementsByTagName("p");
result3[2].innerHTML="this is a pet";
result3[1].style.color="blue";
result3[1].innerText="my paragraph";
console.log(result3);

const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="green";
    test2[x].style.margin="10px";
    test2[x].style.color="blue";
}
console.log(test2);