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
