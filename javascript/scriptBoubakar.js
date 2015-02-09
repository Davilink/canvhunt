/*Positionnement de la souris sur la cible et gestion du clic

var position = document.getElementById('canvHunt');
var context = position.getContext('2d');
var souris;
*/
  
        var x = event.clientX;
        var y = event.clientY;

        //atteindre la cible a diffents endroits

function gererClic{
       for(var i=0; i<cibles.length; i++){
     
         if(x > cible.x + cible.longueur && y > cible.y + cible.hauteur){

               score++;
           }

        }

  if(score>=MAX_SCORE){
           FinPartie();
        }
}    
    
        

/*test sur un carre immobile: si le chasseur clicke sur un element du tableau(exmple: le carre),le score augmente de 1...
    context.strokeRect(0, 0, 45, 45);
    context.stroke();
*/

//pause en cours du game
function togglePlay(){

if(isPlay){
    clearInterval(t);
    document.getElementById('canvHunt').removeEventlistener('click', gererClic);
    }else{
        t=setInterval(deplacerCible,1);
        
        document.getElementById('canvHunt').addEventlistener('click', gererClic);
    }
    isPlay=!isPlay;
}


