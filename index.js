

for ( i = 0; i < 10; i++) {
  document.getElementById("cal" + i).addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;
       
  });
   
}
document.getElementById("cal00").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});


document.getElementById("plus").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("minus").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("multiply").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("divide").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("modulus").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("point").addEventListener("click", function(event) {
    document.getElementById("result").value += event.target.value;});

document.getElementById("cancel").addEventListener("click", function(event) {
    document.getElementById("result").value ="";});

document.getElementById("delete").addEventListener("click", function(event) {
var outPut= document.getElementById("result").value;
    document.getElementById("result").value =outPut.slice(0,-1);});


document.getElementById("equal").addEventListener("click", function(event) {
   var outPut= document.getElementById("result").value;
    document.getElementById("result").value =eval(outPut);});