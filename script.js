

var btn = document.getElementById('btn-forum')
var container = document.getElementById('forum1')
btn.addEventListener('click', function() {
    
  if(container.style.display === 'none') {
      container.style.display = 'block';
  } else {
      container.style.display = 'none';
  }
});



var btnGrupos = document.getElementById('btn-grupos')
var containerGrupos = document.getElementById('grupos')
btnGrupos.addEventListener('click', function() {
    
  if(containerGrupos.style.display === 'none') {
    containerGrupos.style.display = 'block';
  } else {
    containerGrupos.style.display = 'none';
  }
});



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