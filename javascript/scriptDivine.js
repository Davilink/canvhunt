/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;
/*document.addEventListener ("DOMContentLoaded", function () {
	
}*/

//debut de la fonction
function genererCible(){

	nbCibles = 25;
	
	
	
	
	 //boucles qui cree nos cibles
	for(var i=0; i<nbCibles; i++){
			var cible = {
			x:0,
			y:0,
			direction:(Math.round(Math.random())== GAUCHE_DROITE)? GAUCHE_DROITE: DROITE_GAUCHE,
			vivant:true,
			enJeu:true
		}
		 if( cible.direction){
			 cible.x = 0;
		 }
		 else{
			 cible.x = oCanvas.width;
		 }
		 cibles.push(cible);

	}
	 t = setInterval(deplacerCible,1000);
}
function deplacerCible(){
	for (var i=0; i<cibles.length; i++){
		
	 if(cibles[i].direction)	{
		cibles[i].x++;
	 } 
		
	 else{
		cibles[i].x--;
	 } 
	

	}

	dessinerCible();
}
 function dessinerCible(){
	 for(i=0; i<cibles.length ;  i++){
	 oCtx.beginPath();
	 oCtx.arc(cibles[i].x,cibles[i].y,10,0, 2*Math.PI);
		oCtx.fill();
		oCtx.stroke();	
	 }
 }