/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;
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
			vivant:true,
			enJeu:true
		}
		 if( cible.direction){
			 cible.x = 0;
		
		 }
		 else{
			 cible.x = oCanvas.width;
			 	
		 }
		 min = oCanvas.height;
		 max = oCanvas.width;
	    cible.y =  (Math.round(Math.random() * (min - max))  + Canvas_height);
		
		cibles.push(cible);
	

	}
	
	 t = setInterval(deplacerCible,1);
}
function deplacerCible(){
	oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height );
	oCtx.beginPath();
	
	for (var i=0; i<cibles.length; i++){
		
	 if(cibles[i].direction)	{
		cibles[i].x++;
		
	 } 
		
	 else{
		cibles[i].x--;
	 } 
	
	
	}

	t = setInterval(dessinerCible(),1);
}
 function dessinerCible(){
	 
	 oCtx.beginPath();
	 
	 for(i=0; i<cibles.length ;  i++){
	 oCtx.beginPath();
	 oCtx.arc(cibles[i].x,cibles[i].y,10,0, 2*Math.PI);
		oCtx.fill();
		oCtx.stroke();	
	 
	 // t = setInterval(genererCible,10);
 }
 }