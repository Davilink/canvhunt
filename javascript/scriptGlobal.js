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
//Contient le nombre de cible autorisé dans l'aire de jeu
var maxCible = 10;

//Détermine le maximum de cible manqué autorisé
var MAX_CIBLE_MANQUE = 3;
//const MAX_SCORE	= 20;
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
  dessinerArrierePlan();
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

if (typeof togglePause == 'undefined')
  var togglePause = nonImplemente('togglePause');
if (typeof genererCible == 'undefined')
  var genererCible = nonImplemente('genererCible');
if (typeof verifierCible == 'undefined')
  var verifierCible = nonImplemente('verifierCible');

window.addEventListener('DOMContentLoaded', init);
