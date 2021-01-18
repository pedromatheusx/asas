function load(){
    window.location.reload(true);
}





var btnForum = document.getElementById('btn-forum')
var containerForum = document.getElementById('forum1')
btnForum.addEventListener('click', function () {

  if (containerForum.style.display === 'none') {
    document.querySelector("#test > div.container > div.bodySearch.col.btn > form > div > label").innerText = 'FÓRUM'
    containerForum.style.display = 'block';
    document.getElementById('navHomeS').style.display = 'block'
    document.getElementById('navHomeP').style.display = 'none'
    document.getElementById('boneco').style.display = 'none'
    document.getElementById('boneco1').style.display = 'none'
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
    document.getElementById('navHomeS').style.display = 'block'
    document.getElementById('navHomeP').style.display = 'none'
    document.getElementById('boneco').style.display = 'none'
    document.getElementById('boneco1').style.display = 'none'
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
    document.getElementById('navHomeS').style.display = 'block'
    document.getElementById('navHomeP').style.display = 'none'
    document.getElementById('boneco').style.display = 'none'
    document.getElementById('boneco1').style.display = 'none'
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


var btnPsico = document.getElementById('btn-psico')
var containerPsico = document.getElementById('psico')
btnPsico.addEventListener('click', function () {

  if (containerPsico.style.display === 'none') {
    containerPsico.style.display = 'block';
    document.getElementById('edu').style.display = 'none'
  } else {
    containerPsico.style.display = 'none';

  }
});

var btnEdu = document.getElementById('btn-edu')
var containerEdu = document.getElementById('edu')
btnEdu.addEventListener('click', function () {

  if (containerEdu.style.display === 'none') {
    containerEdu.style.display = 'block';
    document.getElementById('psico').style.display = 'none'
  } else {
    containerEdu.style.display = 'none';

  }
});


var btnOutro = document.getElementById('btn-outro')
var containerOutro = document.getElementById('outro')
btnOutro.addEventListener('click', function () {

  if (containerOutro.style.display === 'none') {
    document.getElementById('edu').style.display = 'none'
    document.getElementById('psico').style.display = 'none'
  } else {
    containerEdu.style.display = 'none';

  }
});

var btnHome = document.getElementById('btn-home')
var containerHome = document.getElementById('home')
btnHome.addEventListener('click', function () {

    if (containerHome.style.display === 'none') {
        containerHome.style.display = 'block';
        document.getElementById('psico').style.display = 'none'
      } else {
        containerHome.style.display = 'none';
    
      }
});