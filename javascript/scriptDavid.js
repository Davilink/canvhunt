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
  cibles = new Array();
  score = 0;
  qteCibleManque = 0;
  qteCibleInterdit = 0;
  isPartieEnCours = true;
  oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height);
  btn_finPartie.removeAttribute('disabled');
  btn_togglePlay.removeAttribute('disabled');
  oCanvas.classList.add('partieEnCours');
  genererCible();
  togglePlay();
}
function finPartie(reussi) {
  //TEST:  score = 800;
  //valeur par défaut
  reussi = reussi || true;
  isPartieEnCours = false;
  btn_finPartie.setAttribute('disabled', '');
  btn_togglePlay.setAttribute('disabled', '');
  oCanvas.classList.remove('partieEnCours');
  //Si le jeu est présentement entrain de jouer, on l'arrête
  if(isPlay)
    togglePlay();
  oCtx.save();
  if (reussi)
    dessinerReussite();
  else
    dessinerEchec();
  oCtx.restore();
}

function dessinerReussite() {
  var tbl_message = [
  ];
  tbl_message.push({
    'text': 'Bravo !',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Fin de la partie',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Voici votre score: ',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': score,
    'size': 80,
    'color': 'rgb(255, 217, 5)'
  });
  ecrireMessage(tbl_message);
}
function dessinerEchec() {
  var tbl_message = [
  ];
  tbl_message.push({
    'text': 'Échec',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Fin de la partie',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Meilleure chance la prochaine fois',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Voici votre score: ',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': score,
    'size': 80,
    'color': 'rgb(255, 217, 5)'
  });
  ecrireMessage(tbl_message);
}

function setFont(size, fontFamily) {
  oCtx.font = size + 'px ' + fontFamily;
}

//TODO: ajouter un retour de ligne sur la ligne du texte dépasse le canevas
//TODO: ajouter la possibilité de tracer un trait
//TODO: ajouter un cadre pour contenir le message
function ecrireMessage(tbl_message) {
  var cx;
  var cy;
  var blocHauteur = 0, blocLargeur = 0;
  for (var i = 0; i < tbl_message.length; i++) {
    blocHauteur += tbl_message[i].size;
    
    setFont(tbl_message[i].size, 'ArchitectsDaughter');
    var largeurTextCalc = oCtx.measureText(tbl_message[i].text).width;
    if(blocLargeur < largeurTextCalc)
      blocLargeur = largeurTextCalc;
  }
  
  //On commence l'écriture à ce point précis dans le canvas pour centrer verticalement
  //le bloc de contenu
  cy = oCanvas.height / 2 - blocHauteur / 2;
  
 /* oCtx.beginPath();
  oCtx.rect(oCanvas.width / 2 - blocLargeur / 2, oCanvas.height / 2 - blocHauteur /2 -50, blocLargeur, blocHauteur);
  oCtx.strokeStyle = 'black';
  oCtx.fillStyle = 'rgb(247, 199, 69)';
  oCtx.closePath();
  oCtx.stroke();
  oCtx.fill();*/
  for (var i = 0; i < tbl_message.length; i++) {
    //On permet de centrer horizontalement le texte
    oCtx.fillStyle = tbl_message[i].color;
    cx = oCanvas.width / 2 - oCtx.measureText(tbl_message[i].text).width / 2;
    oCtx.fillText(tbl_message[i].text, cx, cy);
    //On incrémente le point y avec le size du texte que nous venons d'écrire pour que
    //le prochain texte apparaissent en dessous
    cy += tbl_message[i].size;
  }
}

function verifierCible() {
  //Si la cible sort va de gauche à droite et quel sort du canvas,
  //alors on ajoute 1 à la quantité de cible manqué,
  //sinon on ajoute 0 ce qui revient à ne rien ajouté.
  for(var i=0; i<cibles.length; i++) {
    if(cibles[i].direction == GAUCHE_DROITE)
      qteCibleManque += (cibles[i].x > oCanvas.width) ? 1 : 0;
    else
      qteCibleManque += (cibles[i].x < 0 ) ? 1 : 0;
  }
  
  if(qteCibleManque > MAX_CIBLE_MANQUE)
    finPartie(false);
}