//Vérification et intéraction
//Permet de vérifier si les cibles sont sorti du canvas
function verifierCible() {
	var isResteCible = false;
	for(var i=0; i<cibles.length; i++) {
		//on vérifie les cibles seulement si elle sont enJeu et qu'elle sont vivantes
		if(cibles[i].vivant == 0 && cibles[i].enJeu) {
			//Si la cible va de GAUCHE_DROITE et que sa position est plus grande que la largeur du canvas, alors elle est sortie
			//Si la cible va de DROITE_GAUCHE et que sa position est plus petite que 0, alors elle est sortie
			if((cibles[i].direction == GAUCHE_DROITE && cibles[i].x > oCanvas.width) ||
			  (cibles[i].direction == DROITE_GAUCHE && cibles[i].x < 0)) {
				qteCibleManque ++;
				cibles[i].enJeu = false;
				}
			else {
				isResteCible = true;
			}
		}
	}
	//Si le nombre de cible manque dépasse la quantité autorisé, alors on termina la partie avec un échec
	if(qteCibleManque > MAX_CIBLE_MANQUE)
		finPartie(false);
	//S'il ne reste plus de cible, on termine la partie
	if(!isResteCible)
		finPartie();
}

//fonction permettant d atteindre la cible et de verifier si la cible demeurre vivante, si c est pas le cas le score augmente..
function gererClic(evt){
         var x = evt.clientX - getRelX(oCanvas);
        var y = evt.clientY - getRelY(oCanvas);
        for(var i=0; i<cibles.length; i++){
         if(x > cibles[i].x && x < cibles[i].x + cibles[i].longueur && y > cibles[i].y && y < cibles[i].y + cibles[i].hauteur && cibles[i].vivant == 0){
               score++;
			   cibles[i].vivant = 1;
           }
        }
//si le score atteint le maximum ,fin de partie
  if(score>=MAX_SCORE){
           finPartie();
        }
	playSound();
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