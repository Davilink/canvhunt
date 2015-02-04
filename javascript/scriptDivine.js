// on cree une fonction globale pour le nombre de cible

var nbCible;
var cibles;
document.addEventListener ("DOMContentLoaded", function () {
	setInterval(deplacerCible,1000);
}

//debut de la fonction
function genererCible(){
	var cible = {
		x:0,
		y:0
	}
	nbCibles = 25;
	//tableau de generateur de cibles
	 cibles = new Array();
	 //boucles qui cree nos cibles
	for(var i=0; i<nbCible; i++){
		cible:{[i].x, [i].y};
		cibles.push(cible)
	}
	//console.log("cibles")
	//fonction permettant de laisser une marge de temps entre les cibles
}
	
var droite= +1;
function deplacerCible(){
		
		if (x < canvas.width){
		x += gauche;
		}
		dessinerCible();
 }
 function dessinerCible(){
	 ctx.arc(x,y,10,0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();	
	 
 }