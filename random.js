const myButton = document.getElementById("myBt");
const myLable = document.getElementById("myLable");
const resetBt = document.getElementById("reset");
const min = 1;
const max = 100;
let randomNum;
let reset = 0;


myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLable.textContent = randomNum;
}
resetBt.onclick = function(){
    
    myLable.textContent=reset;
}