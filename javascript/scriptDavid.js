//Permettre de connaitre si une partie est en cours
//La partie peut être en cours même si elle est sur pause
isPartieEnCours = false;
function nonImplemente(fonctionAppelante) {
  if(fonctionAppelante) {
    message = function () {
      console.log("Nom implémenté pour le moment", fonctionAppelante);
    }
    return message;
  }
console.log("Nom implémenté pour le moment");
}

if(typeof togglePause == 'undefined')
  togglePause = nonImplemente('togglePause');

if(typeof genererCible == 'undefined')
   genererCible = nonImplemente('genererCible');

function nouvellePartie() {
  if(isPartieEnCours) {
    //On met le jeux en pause
    togglePause();
    rep = confirm('Une partie est en cours. Désirez vous continuez quand même et mettre fin à cette partie ?');
    //Si l'utilisateur clique sur annulez ou sur le x (pour fermer la fenêtre),
    //alors on sort de la fonction avec l'instruction return;
    //Sinon le reste de la fonction sera exécuté
    if(!rep)
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

function finPartie(reussi) {
  if(reussi)
    dessinerReussite();
  else
    dessinerEchec();
}

function dessinerReussite() {
  
}

function dessinerEchec() {
  var cx, cy;
  var oMessage = {};
  oMessage.titre.texte = "Fin de partie";
  oMessage.titre.largeur = 0;
  oMessage.message.texte = "Échec";
  oMessage.message.largeur = 0;
  
  oCtx.font = "20px ArchitectsDaughter";
  oCtx.fillColor = 'rgb(255, 217, 5)';
  oMessage.titre.largeur = oCtx.measureText(oMessage.titre.texte);
  oMessage.message.largeur = oCtx.measureText(oMessage.message.texte);
  
  
  oCtx.fillText('Échec', 50, 50);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn_nouvellePartie').addEventListener('click', nouvellePartie);
});
