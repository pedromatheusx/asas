




var btnVagas = document.getElementById('btn-vagas')
var containerVagas = document.getElementById('vagas')
btnVagas.addEventListener('click', function() {
    
  if(containerVagas.style.display === 'none') {
    containerVagas.style.display = 'block';
  } else {
    containerVagas.style.display = 'none';
  }
});


var btnRede = document.getElementById('btn-rede')
var containerRede = document.getElementById('rede')
btnRede.addEventListener('click', function() {
    
  if(containerRede.style.display === 'none') {
    containerRede.style.display = 'block';
  } else {
    containerRede.style.display = 'none';
  }
});