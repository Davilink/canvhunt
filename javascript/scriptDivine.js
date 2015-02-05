// on cree une fonction globale pour le nombre de cible

var nbCible;

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
		 cible.x = Math.floor((Math.random() * oCanvas.width) + 0);
		 cible.y = Math.floor((Math.random() * oCanvas.height/2) + 0);
		 cibles.push(cible)
	}
	
function deplacer.x(){
	var droite = +1;
	var gauche = -3;
	var x = oCanvas.width;

	
	if (x <= oCanvas.width){
		x + = droite
		}

	else{
		x + = gauche
	}
	dessinerCible();
}

function deplacer.y(){
	var haut = +1;
	var bas = -3;
	var y = oCanvas.height/2;
	
	if (y <= oCanvas.height){
		y + = haut
		}

	else{
		y + = gauche
	}
	dessinerCible();
	
}
}

 function dessinerCible(){
	 ctx.arc(x,y,10,0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();	
	 
 }