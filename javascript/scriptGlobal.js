"use strict";
//Tableau contenant toutes les cibles
var cibles;
//Contient le score
var score;
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
//Contient la référence pour le canvas
var oCanvas;
//Contient la référence pour le contexte du canvas
var oCtx;
//Contient le nombre de cible autorisé dans l'aire de jeu
var maxCible = 10;

//Détermine le maximum de cible manqué autorisé
const MAX_CIBLE_MANQUE = 3;
//const MAX_SCORE	= 20;
//Détermine vitesse de déplacement pour le setInterval
const VITESSE	= 10
//Utilisé pour la direction
const GAUCHE_DROITE = 0;
const DROITE_GAUCHE = 1;

function init() {
  oCanvas = document.querySelector('#canvHunt');
  oCtx = oCanvas.getContext('2d');
}

window.addEventListener('DOMContentLoaded', init);
