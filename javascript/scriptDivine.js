/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;
var longueur;
var hauteur;
/*document.addEventListener ("DOMContentLoaded", function () {
	
}*/

//debut de la fonction
function genererCible(){

	nbCibles = 50;
var Canvas_height = oCanvas.height/2;
var posY =  0;
	
	
	 //boucles qui cree nos cibles

	 
	for(var i=0; i<nbCibles; i++){
			var cible = {
			x:0,
			y:0,
			direction:(Math.round(Math.random())== GAUCHE_DROITE)? GAUCHE_DROITE: DROITE_GAUCHE,
			vitesse : (Math.round(Math.random() * 50) +100),
			vivant:true,
			enJeu:true
		}
		 if( cible.direction){
			 cible.x = 0;
		
		 }
		 else{
			 cible.x = oCanvas.width;
			 	
		 }
		 min = 0;
		 max = 400;
	    cible.y =  (Math.round(Math.random() * (min - max))  + Canvas_height);
		
		cibles.push(cible);
	

	}
	//deplacerCible();
	 t = setInterval(deplacerCible,1);
}
function deplacerCible(){
	oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height );
	oCtx.beginPath();
	
	for (var i=0; i<cibles.length; i++){

	 if(cibles[i].direction)	{
		cibles[i].x+= cibles[i].vitesse
	
		
	 } 
		
	 else{
		cibles[i].x-= cibles[i].vitesse;
	
	 } 
		
	
	}

	//t = setInterval(dessinerCible,1);
}
 function dessinerCible(){
	  longueur=(Math.round(Math.random() * 10) +40);
	  hauteur=(Math.round(Math.random() * 10) +30);
	 oCtx.beginPath();
	 for(i=0; i<cibles.length ;  i++){
	 oCtx.beginPath();
	 oCtx.rect(cibles[i].x,cibles[i].y,longueur,hauteur);
		oCtx.fill();
		oCtx.stroke();	
	 
 }
 }