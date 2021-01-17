function load(){
    window.location.reload(true);
}





var btnForum = document.getElementById('btn-forum')
var containerForum = document.getElementById('forum1')
btnForum.addEventListener('click', function () {

  if (containerForum.style.display === 'none') {
    document.querySelector("#test > div.container > div.bodySearch.col.btn > form > div > label").innerText = 'FÓRUM'
    containerForum.style.display = 'block';
    document.getElementById('vagas').style.display = 'none';
    document.getElementById('rede').style.display = 'none'
  } else {
    containerForum.style.display = 'none';

  }
});



var btnVagas = document.getElementById('btn-vagas')
var containerVagas = document.getElementById('vagas')
btnVagas.addEventListener('click', function () {

  if (containerVagas.style.display === 'none') {
    document.querySelector("#test > div.container > div.bodySearch.col.btn > form > div > label").innerText = 'VAGAS'
    containerVagas.style.display = 'block';
    document.getElementById('forum1').style.display = 'none';
    document.getElementById('rede').style.display = 'none'
  } else {
    containerVagas.style.display = 'none';
  }
});


var btnRede = document.getElementById('btn-rede')
var containerRede = document.getElementById('rede')
btnRede.addEventListener('click', function () {

  if (containerRede.style.display === 'none') {
    document.querySelector("#test > div.container > div.bodySearch.col.btn > form > div > label").innerText = 'REDE DE ASSISTÊNCIA'
    containerRede.style.display = 'block';
    document.getElementById('forum1').style.display = 'none';
    document.getElementById('vagas').style.display = 'none'
  } else {
    containerRede.style.display = 'none';
  }
});



function modalStatus(){
    document.getElementById('exampleModal').style = 'display: none'
    document.querySelector("#test > div.modal-backdrop.show").style = 'display: none'

}