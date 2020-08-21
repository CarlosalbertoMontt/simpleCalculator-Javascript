document.getElementById("sum").onclick= add
document.getElementById("difference").onclick= subtract
document.getElementById("product").onclick= multiply
document.getElementById("quotient").onclick= divide

function add(){
  let a =parseFloat(document.querySelector("#number1").value);
  let b =parseFloat(document.querySelector("#number2").value);
  let solution= a+b
  document.getElementById("answer").innerHTML=solution;
}
function subtract(){
  let a =parseFloat(document.querySelector("#number1").value);
  let b =parseFloat(document.querySelector("#number2").value);
  let solution= a-b
  document.getElementById("answer").innerHTML=solution;
}
function multiply(){
  let a =parseFloat(document.querySelector("#number1").value);
  let b =parseFloat(document.querySelector("#number2").value);
  let solution= a*b
  document.getElementById("answer").innerHTML=solution;
}
function divide(){
  let a =parseFloat(document.querySelector("#number1").value);
  let b =parseFloat(document.querySelector("#number2").value);
  let solution= a/b
  document.getElementById("answer").innerHTML=solution;
}
