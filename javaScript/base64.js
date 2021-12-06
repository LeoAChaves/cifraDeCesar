var resposta = document.querySelector(".resposta");

function codificarBase64(mensagem) {
  var codigo = btoa(mensagem);
  resposta.innerText = codigo;
}

function decodificarBase64(codigo) {
  var mensagem = atob(codigo);
  resposta.innerText = mensagem;
}
