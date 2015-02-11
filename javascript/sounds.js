document.addEventListener('DOMContentLoaded', initSound);

var contextAudio;
var soundShootBuffer;
//Permet de faire jouer un son de tir
function playSound() {
  var source = contextAudio.createBufferSource(); // creates a sound source
  source.buffer = soundShootBuffer;                    // tell the source which sound to play
  source.connect(contextAudio.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);    
}

//Prépare le contexte Audio
function initSound() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    contextAudio = new AudioContext();
  }
  catch (e) {
    alert("L'API Web Audio n'est pas supporté par votre navigateur");
  }
  loadSound();
}

//Permet de charger l'extrait audio
function loadSound() {
  var request = new XMLHttpRequest();
  request.open('GET', './sounds/shotgun.wav');
  request.responseType = 'arraybuffer';
  
  request.onload = function () {
    contextAudio.decodeAudioData(request.response, function (buffer) {
      soundShootBuffer = buffer;
    }, onError);
  }
  request.send();
}

//Si une erreur survient lors du décode du flux audio
function onError() {
  alert('Impossible de décodé le flux Audio. Flux audio non pris en charge ou flux Audio Manquant');
}

