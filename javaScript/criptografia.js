var metodo = document.querySelector(".metodo");
var passo = document.querySelector(".passo");
var enviar = document.querySelector(".enviar");
var tipoRadio = document.forms[0].coddecod;
var tipo = document.querySelector(".tipo");
var chave = document.getElementById("chave").value;
var entrada = document.querySelector("#entrada");

passo.style.display = "none";
metodo.addEventListener("change", function () {
  metodo.style.backgroundColor = "rgba(0, 0, 255, 0.7)";
  metodo.style.transition = "none";
  if (metodo.selectedIndex == 1) {
    // "passo" aparece se Cifra for selecionado
    passo.style.display = "flex";
  } else {
    passo.style.display = "none";
  }
});

tipo.addEventListener("change", function () {
  // muda msg do botão de enviar, conforme opção selecionada
  if (tipoRadio[0].checked) {
    enviar.textContent = "Codificar Mensagem!";
  } else {
    enviar.textContent = "Decodificar Mensagem!";
  }
});

passo.addEventListener("change", function () {
  // atualiza o valor da chave
  chave = document.getElementById("chave").value;
});

enviar.addEventListener("click", function (e) {
  e.preventDefault();
  var mensagem = entrada.value;
  if (metodo.selectedIndex == 0) {
    metodo.style.backgroundColor = "orangered";
    metodo.style.transition = "2s";
  } else if (metodo.selectedIndex == 1) {
    if (tipoRadio[0].checked) {
      codificarCifra(mensagem, chave);
    } else {
      decodificarCifra(mensagem, chave);
    }
  } else {
    if (tipoRadio[0].checked) {
      codificarBase64(mensagem);
    } else {
      decodificarBase64(mensagem);
    }
  }
});
