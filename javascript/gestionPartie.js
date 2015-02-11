//Gestion de partie
//initialise et réinitialise les variables à leur défaut pour permettre de lancer une nouvelle partie
function nouvellePartie() {
  if (isPartieEnCours) {
    //On met le jeux en pause
    togglePlay();
    rep = confirm('Une partie est en cours. Désirez vous continuez quand même et mettre fin à cette partie ?');
    //Si l'utilisateur clique sur annulez ou sur le x (pour fermer la fenêtre),
    //alors on sort de la fonction avec l'instruction return;
    //Sinon le reste de la fonction sera exécuté
    if (!rep) {
      togglePlay();
      return;
    }
  }
  //Affectation des valeur par défaut
  cibles = new Array();
  score = 0;
  qteCibleManque = 0;
  qteCibleInterdit = 0;
  isPartieEnCours = true;
  //On nettoie le canvas
  oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height);
  //On active les boutons finPartie et togglePlay
  btn_finPartie.removeAttribute('disabled');
  btn_togglePlay.removeAttribute('disabled');
  //Ajoute la classe pour permettre d'avoir une visseur comme curseur de souris
  oCanvas.classList.add('partieEnCours');
  dessinerArrierePlan();
  genererCible();
  togglePlay();
}

//debut de la fonction qui produit des cibles venamt de gauches et de droite
function genererCible(){
	var Canvas_height = oCanvas.height/2;
	var posY =  0;
	var min = 0;
	var max = 400;
		
	//boucles qui cree nos cibles
	for(var i=0; i<MAX_CIBLES; i++){
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

//Permet d'afficher une message pour la fin de partie
//Si reussi == true, alors on affiche un message Bravo, sinon on affiche echec 
//
//
function finPartie(reussi) {
  //TEST:  score = 800;
  //valeur par défaut
  reussi = (typeof reussi == 'undefined') ? true : reussi;
  //L'état de la partie change
  isPartieEnCours = false;
  //On désactive finPartie et tooglePlay
  btn_finPartie.setAttribute('disabled', '');
  btn_togglePlay.setAttribute('disabled', '');
  //On enlève la classe ce qui enlève donc le visseur comme curseur de souris
  oCanvas.classList.remove('partieEnCours');
  //Si le jeu est présentement entrain de jouer, on l'arrête
  if(isPlay)
    togglePlay();
  oCtx.save();
  //Appel les fonctions pour dessiner les messages
  if (reussi)
    setTimeout(dessinerReussite, 500);
  else
    setTimeout(dessinerEchec, 500);
  oCtx.restore();
}

//pause et play en cours du game
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
