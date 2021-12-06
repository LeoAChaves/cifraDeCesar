var resposta = document.querySelector(".resposta");

function codificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      codigo += String.fromCharCode(((charCode + chave - 65) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      codigo += String.fromCharCode(((charCode + chave - 97) % 26) + 97);
    } else {
      codigo += mensagem[i];
    }
  }
  resposta.innerText = codigo;
}
function decodificarCifra(mensagem, chave) {
  mensagem = mensagem.split("");
  chave = parseInt(chave, 10);
  var codigo = "";
  for (var i = 0; i < mensagem.length; i++) {
    var charCode = mensagem[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      codigo += String.fromCharCode(((charCode - chave - 90) % 26) + 90);
    } else if (charCode >= 97 && charCode <= 122) {
      codigo += String.fromCharCode(((charCode - chave - 122) % 26) + 122);
    } else {
      codigo += mensagem[i];
    }
  }
  resposta.innerText = codigo;
}
