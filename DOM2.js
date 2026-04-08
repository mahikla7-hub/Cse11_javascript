function onClick() {
    console.log("clicked"); 
}
function onMouseOver() {
    console.log("mouse over"); 
}
function onMouseOut() {
    console.log("mouse out"); 
}   
function onMouseDown() {
    console.log("mouse down"); 
}
function onMouseUp() {
    console.log("mouse up"); 
}
function onMouseMove() {
    console.log("mouse move"); 
}
const x = document.querySelector('input');
x.addEventListener( 'focus', onhandlefocus);
x.addEventListener( 'blur', onhandlebur);
function
onhandlefocus() {
    x.style.background = "red";
}
