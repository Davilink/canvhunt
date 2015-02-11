//Fonction raccourci
//Prépare un tableau de message (fonction raccourci)
function dessinerReussite() {
  var tbl_message = [
  ];
  tbl_message.push({
    'text': 'Bravo !',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Fin de la partie',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Voici votre score: ',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': score,
    'size': 80,
    'color': 'rgb(255, 217, 5)'
  });
  ecrireMessage(tbl_message);
}
//Prépare un tableau de message (fonction raccourci)
function dessinerEchec() {
  var tbl_message = [
  ];
  tbl_message.push({
    'text': 'Échec',
    'size': 70,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Fin de la partie',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Meilleure chance la prochaine fois',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': 'Voici votre score: ',
    'size': 50,
    'color': 'rgb(255, 217, 5)'
  });
  tbl_message.push({
    'text': score,
    'size': 80,
    'color': 'rgb(255, 217, 5)'
  });
  ecrireMessage(tbl_message);
}
//Permet de modifier la police d'écriture du contexte (fonction raccourci)
function setFont(size, fontFamily) {
  oCtx.font = size + 'px ' + fontFamily;
}

//Permet d'obtenir la position X de l'élément dans le document.
function getRelX(ele) {
	return (ele == document.body ) ? ele.offsetLeft : ele.offsetLeft + getRelX(ele.parentNode);
}
//Permet d'obtenir la position Y de l'élément dans le document.
function getRelY(ele) {
	return (ele == document.body ) ? ele.offsetTop : ele.offsetTop + getRelY(ele.parentNode);
}

function random(min, max) {
//function qui donne un nombre au hasard entre le minimum et le maximum	
	return parseInt(Math.random() * (max - min) + min);
}