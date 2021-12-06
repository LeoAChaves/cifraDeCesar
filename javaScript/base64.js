var resposta = document.querySelector(".resposta");

function codificarBase64(mensagem) {
  const codigo = btoa(mensagem);
  resposta.innerText = codigo;
}

function decodificarBase64(codigo) {
  const mensagem = atob(codigo);
  resposta.innerText = mensagem;
}
