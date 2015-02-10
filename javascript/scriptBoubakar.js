function gererClic(evt){
         var x = evt.clientX - getRelX(oCanvas);
        var y = evt.clientY - getRelY(oCanvas);
        for(var i=0; i<cibles.length; i++){
         if(x > cibles[i].x && x < cibles[i].x + cibles[i].longueur && y > cibles[i].y && y < cibles[i].y + cibles[i].hauteur && cibles[i].vivant == 0){
               score++;
			   cibles[i].vivant = 1;
           }

        }

  if(score>=MAX_SCORE){
           finPartie();
        }
	playSound();
}

//Permet d'obtenir la position X de l'élément dans le document.
function getRelX(ele) {
	return (ele == document.body ) ? ele.offsetLeft : ele.offsetLeft + getRelX(ele.parentNode);
}
//Permet d'obtenir la position Y de l'élément dans le document.
function getRelY(ele) {
	return (ele == document.body ) ? ele.offsetTop : ele.offsetTop + getRelY(ele.parentNode);
}

//pause en cours du game
function togglePlay(){

if(isPlay){
    clearInterval(t);
    oCanvas.removeEventListener('click', gererClic);
    }else{
        t=setInterval(deplacerCible,500);
        
        oCanvas.addEventListener('click', gererClic);
    }
    isPlay=!isPlay;
}