//Positionnement de la souris sur la cible et gestion du clic

var position = document.getElementById('viseur');
var context = position.getContext('2d');
var souris;

    position.addEventListener('click',function gererClic(event) {
        var x = event.clientX;
        var y = event.clientY;

        //atteindre la cible a diffents endroits


       for(var i=0; i<cibles.length; i++){
        if(x>cible.x && y>cible.y) {
            return false;
        }else if(x==cible.x && y==cible.y){

               score++;
           }if(score>=MAX_SCORE){
           alert('fin de partie');
        }

        }
    }, true);
    
        

//test sur un carre immobile: si le chasseur clicke sur un element du tableau(exmple: le carre),le score augmente de 1...
    context.strokeRect(0, 0, 45, 45);
    context.stroke();


//pause en cours du game
function togglePlay(){

if(isPlay){
    clearInterval(t);
    document.getElementById('viseur').removeEventlistener('click', gererClic(event));
    }else{
        setInterval(function deplacerCible(){t,1});
        
        document.getElementById('viseur').addEventlistener('click', gererClic(event));
    }
    isPlay=!isPlay;
}


