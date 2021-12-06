var resposta = document.querySelector(".resposta");

function codificarBase64(mensagem) {
  var codigo = btoa(mensagem);
  resposta.innerText = codigo;
}

function decodificarBase64(codigo) {
  var valido = true;
  // para evitar Failed to execute 'atob'
  for (var i = 0; i < codigo.length; i++) {
    var charCode = codigo[i].charCodeAt();
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode == 61 ||
        charCode == 43 ||
        charCode == 47
      )
    ) {
      valido = false;
      tipo.style.backgroundColor = "orangered";
      setTimeout(
        () => (tipo.style.backgroundColor = "rgba(0, 0, 255, 0.7)"),
        1000
      );
      tipo.style.transition = "1s";
      break;
    }
  }
  if (valido) {
    var mensagem = atob(codigo);
    resposta.innerText = mensagem;
  }
}
