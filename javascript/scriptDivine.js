/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;
var T = setInterval(deplacerCible,1000);
/*document.addEventListener ("DOMContentLoaded", function () {
	
}*/

//debut de la fonction
function genererCible(){

	nbCibles = 25;
	Gauche_droite;
	Droite_gauche;
	
	
	 //boucles qui cree nos cibles
	for(var i=0; i<nbCibles; i++){
			var cible = {
			x:0,
			y:0,
			direction:(Math.round(Math.random)== Gauche_droite)? Gauche_droite= Droite_gauche;
			vivant:true;
			enJeu:true;
		}
		 if( direction){
			 cible.x = 0;
		 }
		 else{
			 cible.x = oCanvas.width;
		 }
		 cibles.push(cible)
	}
	
function deplacerCible(){
	for (var i=0; i<cibles.length; i++){
		
	 if(cibles[i].direction)	{
		cibles[i].x++;
	 } 
		
	 else{
		cibles[i].x--;
	 } 
	
	dessinerCible();
	}
}

}
 function dessinerCible(){
	 for(i=0; i<=cibles.length ;  i++){
	 ctx.arc(cibles[i].x,cibles[i].y,0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();	
	 }
 }