function gererClic(event){
         var x = event.clientX;
        var y = event.clientY;
        for(var i=0; i<cibles.length; i++){
     
         if(x > cibles[i].x && x < cibles[i].x + cibles[i].longueur && y > cibles[i].y && y < cibles[i].y + cibles[i].hauteur){

               score++;
			   console.log(score);
           }

        }

  if(score>=MAX_SCORE){
           FinPartie();
        }
}    

//pause en cours du game
function togglePlay(){

if(isPlay){
    clearInterval(t);
    oCanvas.removeEventListener('click', gererClic);
    }else{
        t=setInterval(deplacerCible,1000);
        
        oCanvas.addEventListener('click', gererClic);
    }
    isPlay=!isPlay;
}