var Timer = 60;
var score=0;
var dc=0;
function inscr(){
    score +=10;document.querySelector("#scr").textContent=score;
}
  /*================================*/
  function hitter(){
      dc= Math.floor(Math.random()*10);
    document.querySelector("#hitters").textContent=dc;
  }
 function bubblemaker(){
    var pc="";
    for(var i =1 ; i<=160;i++){
      var  ac= Math.floor(Math.random()*10)
       pc += `<div class="bubble">${ac}</div>`;
    }
    document.querySelector("#ptb").innerHTML=pc;
 
 }
 /*================================*/
 function runTimer(){
   var timers= setInterval(function(){
        if(Timer>0){
            Timer --;
            document.querySelector("#Timer").textContent=Timer;}
         else{
            clearInterval(timers);
            document.querySelector("#ptb").innerHTML=`<h1> Game Over</h1>`
         }
        },1000);
        }
        document.querySelector("#ptb")
        .addEventListener("click",function(dets){
          var clicked =Number(dets.target.textContent);
          if(clicked===dc){
            inscr();
            bubblemaker();
            hitter();
          }
        });
 runTimer();
 bubblemaker();
hitter();




