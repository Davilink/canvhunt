//Permettre de connaitre si une partie est en cours
//La partie peut être en cours même si elle est sur pause
isPartieEnCours = false;

if(!togglePause)
  togglePause = function () {};

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
  
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn_nouvellePartie').addEventListener('click', nouvellePartie);
});
