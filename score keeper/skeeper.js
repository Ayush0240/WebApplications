var p1but = document.querySelector("#p1");
var p2but = document.querySelector("#p2");
var rb = document.querySelector("#res");
var p1dis = document.querySelector("#d1");
var p2dis = document.querySelector("#d2");
var inputnumber = document.querySelector("input");
var wscrdis = document.querySelector("#wsd");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningscr = 10;

p1but.addEventListener("click",function(){
    if(!gameOver){
        p1score++;
         if(p1score === winningscr){
             p1dis.classList.add("winner");
             gameOver=true;
         }
          p1dis.textContent = p1score;
    }
});
p2but.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
         if(p2score === winningscr){
            p2dis.classList.add("winner");
             gameOver=true;
         }
          p2dis.textContent = p2score;
    }
});
rb.addEventListener("click", function(){
reset();
});
function reset(){
p1score = 0;
p2score = 0;
p1dis.textContent = 0;
p2dis.textContent = 0;
p1dis.classList.remove("winner");
p2dis.classList.remove("winner");
gameOver=false;}

inputnumber.addEventListener("change", function(){
    wscrdis.textContent = inputnumber.value;
    winningscr = Number(inputnumber.value);
    reset();

});