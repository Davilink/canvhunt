  //Permettre de connaitre si une partie est en cours
  //La partie peut être en cours même si elle est sur pause

function nonImplemente(fonctionAppelante) {
  if (fonctionAppelante) {
    message = function () {
      console.log('Nom implémenté pour le moment', fonctionAppelante);
    }
    return message;
  }
  console.log('Nom implémenté pour le moment');
}
if (typeof togglePause == 'undefined')
togglePause = nonImplemente('togglePause');

if (typeof genererCible == 'undefined')
  genererCible = nonImplemente('genererCible');

function nouvellePartie() {
  if (isPartieEnCours) {
    //On met le jeux en pause
    togglePause();
    rep = confirm('Une partie est en cours. Désirez vous continuez quand même et mettre fin à cette partie ?');
    //Si l'utilisateur clique sur annulez ou sur le x (pour fermer la fenêtre),
    //alors on sort de la fonction avec l'instruction return;
    //Sinon le reste de la fonction sera exécuté
    if (!rep)
      return;
    togglePause();
  }
  cibles = new Array();
  score = 0;
  qteCibleManque = 0;
  qteCibleInterdit = 0;
  isPlay = false;
  isPartieEnCours = true;
  genererCible();
}
function finPartie(reussi = true) {
  //TEST:  score = 800;
  oCtx.clearRect(0, 0, oCanvas.width, oCanvas.height);
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

function setFont(size, fontFamily, color) {
  oCtx.font = size + 'px ' + fontFamily;
  if (color)
    oCtx.fillStyle = color;
}

//TODO: ajouter un retour de ligne sur la ligne du texte dépasse le canevas
//TODO: ajouter la possibilité de tracer un trait
function ecrireMessage(tbl_message) {
  var cx;
  var cy;
  var blocHauteur = 0;
  for (var i = 0; i < tbl_message.length; i++) {
    blocHauteur += tbl_message[i].size;
  }
  
  //On commence l'écriture à ce point précis dans le canvas pour centrer verticalement
  //le bloc de contenu
  cy = oCanvas.height / 2 - blocHauteur / 2;
  for (var i = 0; i < tbl_message.length; i++) {
    setFont(tbl_message[i].size, 'ArchitectsDaughter', tbl_message[i].color);
    //On permet de centrer horizontalement le texte
    cx = oCanvas.width / 2 - oCtx.measureText(tbl_message[i].text).width / 2;
    oCtx.fillText(tbl_message[i].text, cx, cy);
    //On incrémente le point y avec le size du texte que nous venons d'écrire pour que
    //le prochain texte apparaissent en dessous
    cy += tbl_message[i].size;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn_nouvellePartie').addEventListener('click', nouvellePartie);
});
