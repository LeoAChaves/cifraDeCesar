var metodo = document.querySelector(".metodo");
var passo = document.querySelector(".passo");

passo.style.display = "none";

metodo.addEventListener("change", function () {
  var selecionado = metodo.selectedIndex;

  if (selecionado == 1) {
    passo.style.display = "flex";
  } else {
    passo.style.display = "none";
  }
});

var enviar = document.querySelector(".enviar");
var tipoRadio = document.forms[0].coddecod;
var tipo = document.querySelector(".tipo");

tipo.addEventListener("change", function () {
  if (tipoRadio[0].checked) {
    enviar.textContent = "Codificar Mensagem!";
  } else {
    enviar.textContent = "Decodificar Mensagem!";
  }
});

var entrada = document.getElementById("entrada");

enviar.addEventListener("click", function (e) {
  e.preventDefault();
});
