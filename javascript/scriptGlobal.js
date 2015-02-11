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
//Contient l'image pour les oiseaux et pour le boum (lorsqu'il sont tiré)
var imgOiseauGAUCHE_DROITE;
var imgOiseauDROITE_GAUCHE;
var imgBoum;
var dim_imgBoum = { largeur : 150, hauteur : 150};
//Contient le nombre de cible autorisé dans l'aire de jeu
var MAX_CIBLES = 20;
//Détermine le maximum de cible manqué autorisé
var MAX_CIBLE_MANQUE = 3;
//Détermine le score maximal autorisé, dans ce cas-ci c'est le nombre de cible puisque chaque cible augment le score de 1
var MAX_SCORE = MAX_CIBLES;
//Détermine vitesse de déplacement pour le setInterval
var VITESSE	= 10
//Utilisé pour la direction
var GAUCHE_DROITE = 0;
var DROITE_GAUCHE = 1;

function init() {
//Initialisation
oCanvas = document.querySelector('#canvHunt');
oCtx = oCanvas.getContext('2d');
oCanvasAP = document.querySelector("#arrierePlan");
oCtxAP = oCanvasAP.getContext('2d');
btn_nouvellePartie = document.querySelector('#btn_nouvellePartie');
btn_finPartie = document.querySelector('#btn_finPartie');
btn_togglePlay = document.querySelector('#btn_togglePlay');
//Ajout des gestionnaire d'évènements
btn_nouvellePartie.addEventListener('click', nouvellePartie);
btn_finPartie.addEventListener('click', finPartie);
btn_togglePlay.addEventListener('click', togglePlay);
//On précharge la police d'écriture
setFont(50, 'ArchitectsDaughter');
//On affiche le titre du jeu
oCtx.fillText('CanvHunt', 290, 150);
//Chargement de l'image d'accueil pour le canvas
var img = new Image();
img.src = "./images/canvHunt.jpg";
img.onload = function () {
	//On centre horizontalement et verticalement l'image qui représente le jeu
	oCtx.drawImage(this, oCanvas.width/2 - this.width/2, oCanvas.height/2 - this.height/2);
	}

//Chargement des images utilisé pour le jeu

//Boum remplace l'oiseau lorsqu'il est tiré
imgBoum = new Image();
imgBoum.src = "./images/boom.svg";
//Image pour les oiseau
imgOiseauGAUCHE_DROITE = new Image();
imgOiseauDROITE_GAUCHE = new Image();
imgOiseauGAUCHE_DROITE.src = './images/oiseauGAUCHE_DROITE.svg';
imgOiseauDROITE_GAUCHE.src = './images/oiseauDROITE_GAUCHE.svg';
//Lorsque la dernière image est chargé on active le bouton nouvellePartie
imgOiseauDROITE_GAUCHE.onload = function () {
	btn_nouvellePartie.removeAttribute('disabled');
	}
}

window.addEventListener('DOMContentLoaded', init);
