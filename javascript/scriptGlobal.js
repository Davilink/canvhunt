"use strict";
var cibles;
var score;
var qteCibleManque;
var qteCibleInterdit;
var t;
var isPlay = false;
var oCanvas;
var oCtx;

const MAX_CIBLE_MANQUE = 3;
//const MAX_SCORE	= 20;
const VITESSE	= 10


function init() {
  oCanvas = document.querySelector('#canvHunt');
  oCtx = oCanvas.getContext('2d');
}

window.addEventListener('DOMContentLoaded', init);
