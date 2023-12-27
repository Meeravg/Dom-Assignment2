function generateNumber() {
  // generate a random integer(hint : Math.random)
  let num = document.getElementById("number")
    let n=Math.floor(Math.random()*100)
     num.textContent=n
     checkOddEven(n)
}
function checkOddEven(num) {
  // logic for even / odd
  let op=document.getElementById("odd-even")
  if(num%2==0){
    op.textContent="The number is even"
  }else{
    op.textContent="The number is odd"
  }
}
window.onload = function () {
  let smg=document.getElementById("generate-number")
  // add event listeners to the button here
  smg.addEventListener('click',function(){
    generateNumber()
    console.log("Hello")
  })
};
// donot change the following export statement
if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}