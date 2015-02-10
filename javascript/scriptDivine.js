/** Ce script se charge de generer des cibles
* deplacer ces cibles et il fait aussi une mini fonction comme creer la forme de la cible
*/


// on cree une fonction globale pour le nombre de cible

var nbCibles;

//debut de la fonction qui produit des cibles venamt de gauches et de droite
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
			y:random(0, 400),
			direction:(Math.round(Math.random())== GAUCHE_DROITE)? GAUCHE_DROITE: DROITE_GAUCHE,
			vitesse : random(5, 50),
			longueur:random(40, 70),
			hauteur:random(30, 50),
			vivant:0,
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
function random(min, max) {
//function qui donne un nombre au hasard entre le minimum et le maximum	
	return parseInt(Math.random() * (max - min) + min);
}

function deplacerCible(){
//fonction qui realise le deplacement des cibles en points (x, y) de gauche a droite
//si elle vient de la gauche, le point x augmente
//si elle vient de la droite, le point x diminue 
	oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height );
	oCtx.beginPath();
	for (var i=0; i<cibles.length; i++){
	if (cibles[i].vivant == 0 && cibles[i].enJeu == true){

		if(cibles[i].direction == GAUCHE_DROITE)	{
			cibles[i].x+= cibles[i].vitesse;
		} 
		
		else{
			cibles[i].x-= cibles[i].vitesse;
	
		} 
	}
		
	}
	//on appelle ces deux fonctions pour que la cible soit redessiner et reverifier a chaque fois
	verifierCible();
	dessinerCible();
}
function dessinerCible(){
//fonction qui dessine nos cibles et l effet "boum" lorsque la cible meurt
//si la cible = 0 (vivant) elle est dessinerCibler
//si la cible = 1 (tirer) l'effet "boum" apparait 
//puis cible = 2 (mort) alors il n y a plus rien dans le canvas
	 var imgOiseau;
	 for(i=0; i<cibles.length ;  i++){
		 if (cibles[i].vivant == 0 && cibles[i].enJeu == true){
			 if(cibles[i].direction == GAUCHE_DROITE)
				imgOiseau = imgOiseauGAUCHE_DROITE;
			else
				imgOiseau = imgOiseauDROITE_GAUCHE;
			oCtx.drawImage(imgOiseau, 0,0, imgOiseau.width, imgOiseau.height, cibles[i].x,cibles[i].y,cibles[i].longueur,cibles[i].hauteur);
			}
		 else if(cibles[i].vivant == 1){
			 oCtx.drawImage(imgBoum, 0, 0, imgBoum.width, imgBoum.height, cibles[i].x-dim_imgBoum.largeur/2, cibles[i].y-dim_imgBoum.hauteur/2, dim_imgBoum.largeur, dim_imgBoum.hauteur);
			 cibles[i].vivant = 2;
			}
		}
	}