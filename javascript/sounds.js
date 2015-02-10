document.addEventListener('DOMContentLoaded', initSound);
var context;
var soundShootBuffer;
function playSound() {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = soundShootBuffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);    
}


function initSound() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    loadSound();
  }
  catch (e) {
    alert("L'API Web Audio n'est pas supporté par votre navigateur");
  }
}

function loadSound() {
  var request = new XMLHttpRequest();
  request.open('GET', './sounds/shotgun.wav');
  request.responseType = 'arraybuffer';
  
  request.onload = function () {
    context.decodeAudioData(request.response, function (buffer) {
      soundShootBuffer = buffer;
    }, onError);
  }
  request.send();
}

function onError() {
  alert('Impossible de décodé le flux Audio. Flux audio non pris en charge ou flux Audio Manquant');
}

