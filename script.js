var timer = 60;
var score =0
var hitrn = 0;
function runtimer(){
  var timeint=  setInterval(function(){
   if(timer>0){
        timer--;
        document.querySelector("#gettime").textContent = timer;
   }
        else{
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML =`<div class="close">
            <h1>Game over</h1>
            <h2>Total Score : ${score}</h2>
            <a href="" onclick="refreshPage()">Start new Game</a>
        </div>`;
           }
    }, 1000)

}
   
function hitnumber(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){

    var clutter = "";
    
    for(i=1; i<=119; i++){
        
         var rn = Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${rn}</div>`
    }
      
    document.querySelector("#pbottom").innerHTML = clutter;
}

function totalscore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener('click', function(dets){
   clickednum =(Number(dets.target.textContent));
   if(clickednum === hitrn){
    totalscore();
    hitnumber();
    makeBubble();
   }
 
})

function refreshPage() {
    location.reload(); // Reload the current page
}

runtimer();
makeBubble();
hitnumber();
