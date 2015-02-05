// on cree une fonction globale pour le nombre de cible

var nbCible;
var T = setIterval(function(){deplacerCible()}, 2000);
/*document.addEventListener ("DOMContentLoaded", function () {
	setInterval(deplacerCible,1000);
}*/

//debut de la fonction
function genererCible(){
	var cible = {
		x:0,
		y:0
	}
	nbCibles = 25;
	
	 //boucles qui cree nos cibles
	for(var i=0; i<nbCible; i++){
		var  cible_direction.droite = Math.floor((Math.random() * 0) + 1);
		var  cible_direction.gauche = Math.floor((Math.random() * 0) - 1);
		 if( cible_direction.droite){
			 x = 0;
		 }
		 else{
			 x = oCanvas.width;
		 }
		 cibles.push(cible)
	}
	
function deplacerCible(){
	for (var i=0; i<nbCible; i++){
		var  cible_direction.droite = Math.floor((Math.random() * 0) + 1);
		var cible_direction.gauche = Math.floor((Math.random() * 0) - 1);
		var cible[i].direction=null;
	 if(cibles[i].direction == cible_direction.droite)	{
		x++;
	 } 
		
	 if(cibles[i].direction == cible_direction.gauche)	{
		x--;
	 } 
		
	}
	dessinerCible();
}

}
 function dessinerCible(){
	 ctx.arc(x,y,10,0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();	
	 
 }