"use strict";
//Tableau contenant toutes les cibles
var cibles;
//Contient le score
var score = 0;
//Contient la quantité de cible manqué
var qteCibleManque;
//Contient la quantité de cible qui ont été tiré, mais qui sont interdit
var qteCibleInterdit;
//Contient la référence de la minuterie
var t;
//Défini si le jeu est en pause ou non
var isPlay = false;
//Définit si une partie est en cours ou non
/*Permettre de connaitre si une partie est en cours
 *La partie peut être en cours même si elle est sur pause
*/
var isPartieEnCours = false; 
//Contient la référence pour le canvas canvHunt et le contexte de ce même canvas
var oCanvas, oCtx;
//Contient la référence pour le canvas arrière-plan et le contexte de ce même canvas
var oCanvasAP, oCtxAP;
//Contient la référence des contrôle du jeu
var btn_nouvellePartie, btn_finPartie, btn_togglePlay;
//Contient l'image pour les oiseaux
var imgOiseauGAUCHE_DROITE
var imgOiseauDROITE_GAUCHE
//Contient le nombre de cible autorisé dans l'aire de jeu
var maxCible = 10;

//Détermine le maximum de cible manqué autorisé
var MAX_CIBLE_MANQUE = 3;
var MAX_SCORE = 10;
//Détermine vitesse de déplacement pour le setInterval
var VITESSE	= 10
//Utilisé pour la direction
var GAUCHE_DROITE = 0;
var DROITE_GAUCHE = 1;

function init() {
  oCanvas = document.querySelector('#canvHunt');
  oCtx = oCanvas.getContext('2d');
  oCanvasAP = document.querySelector("#arrierePlan");
  oCtxAP = oCanvasAP.getContext('2d');
  btn_nouvellePartie = document.querySelector('#btn_nouvellePartie');
  btn_finPartie = document.querySelector('#btn_finPartie');
  btn_togglePlay = document.querySelector('#btn_togglePlay');
  
  btn_nouvellePartie.addEventListener('click', nouvellePartie);
  btn_finPartie.addEventListener('click', finPartie);
  btn_togglePlay.addEventListener('click', togglePlay);
  //On précharge la police d'écriture
  setFont('1px', 'ArchitectsDaughter');
  //On écrit un texte de test en dehors du canvas pour forcer le chargement de la police
  //Un délai de chargement empêche l'utilisation immédiate de la police	d'écriture
  oCtx.fillText('test', -100, -100);
  var img = new Image();
  img.src = "./images/canvHunt.jpg";
  img.onload = function () {
	oCtx.drawImage(this, oCanvas.width/2 - this.width/2, oCanvas.height/2 - this.height/2);
  }
  
  imgOiseauGAUCHE_DROITE = new Image();
  imgOiseauDROITE_GAUCHE = new Image();
  imgOiseauGAUCHE_DROITE.src = './images/oiseauGAUCHE_DROITE.svg';
  imgOiseauDROITE_GAUCHE.src = './images/oiseauDROITE_GAUCHE.svg';
  imgOiseauDROITE_GAUCHE.onload = function () {
	btn_nouvellePartie.removeAttribute('disabled');
  }
}

function nonImplemente(fonctionAppelante) {
  if (fonctionAppelante) {
    var message = function () {
      console.log('Nom implémenté pour le moment', fonctionAppelante);
    }
    return message;
  }
  console.log('Nom implémenté pour le moment');
}

window.addEventListener('DOMContentLoaded', init);
