/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;
/*document.addEventListener ("DOMContentLoaded", function () {
	
}*/

//debut de la fonction
function genererCible(){

	nbCibles = 10;
var Canvas_height = oCanvas.height/2;
var posY =  0;
var min = 0;
var max = 400;
	
	 //boucles qui cree nos cibles

	 
	for(var i=0; i<nbCibles; i++){
			var cible = {
			x:0,
			y:(Math.round(Math.random() * (min - max))  + Canvas_height),
			direction:(Math.round(Math.random())== GAUCHE_DROITE)? GAUCHE_DROITE: DROITE_GAUCHE,
			vitesse : (Math.round(Math.random() * 50) +100),
			longueur:(Math.round(Math.random() * 10) +40),
			hauteur:(Math.round(Math.random() * 10) +30),
			vivant:true,
			enJeu:true
		}
		
			
		 if( cible.direction == GAUCHE_DROITE){
			 cible.x = 0;
		
		 }
		 else{
			 cible.x = oCanvas.width;
			 	
		 }
		cibles.push(cible);
		}
	
	}


function deplacerCible(){
	oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height );
	oCtx.beginPath();
	for (var i=0; i<cibles.length; i++){
	if (cibles[i].vivant == true && cibles[i].enJeu == true){

		if(cibles[i].direction == GAUCHE_DROITE)	{
			cibles[i].x+= cibles[i].vitesse;
		} 
		
		else{
			cibles[i].x-= cibles[i].vitesse;
	
		} 
	}
		
	}
		verifierCible();
		dessinerCible();
	//t = setInterval(dessinerCible,1);
}
 function dessinerCible(){
	 var imgOiseau;
	 for(i=0; i<cibles.length ;  i++){
		 if (cibles[i].vivant == true && cibles[i].enJeu == true){
			 if(cibles[i].direction == GAUCHE_DROITE)
				imgOiseau = imgOiseauGAUCHE_DROITE;
			else
				imgOiseau = imgOiseauDROITE_GAUCHE;
			oCtx.drawImage(imgOiseau, 0,0, imgOiseau.width, imgOiseau.height, cibles[i].x,cibles[i].y,cibles[i].longueur,cibles[i].hauteur);
		 }
 }
 }