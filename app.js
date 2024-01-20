let numberInput = document.querySelector("#numberInput");
let paragraph = document.querySelector(".texto__paragrafo");
let title = document.querySelector(".container__texto-azul");
let titleMain = document.querySelector(".container__title-main");
let resetButton = document.querySelector("#resetButton");

let numeroAleatorio = parseInt(Math.random() * 100 + 1);

function verificarChute() {
  let numberValue = numberInput.value;

  if (numberValue > numeroAleatorio) {
    paragraph.textContent = "O número aleatorio é menor que seu chute.";
  } else if (numberValue < numeroAleatorio) {
    paragraph.textContent = "O número aleatorio é maior que seu chute.";
  } else if (numberValue == numeroAleatorio) {
    paragraph.textContent = "Aperte em Novo jogo para começar outra vez!";
    titleMain.innerHTML = `<h1><span class='container__texto-azul'>Parabéns, </span>você acertou o número secreto <span class='container__texto-azul'>(${numeroAleatorio})</span></h1>`;
    resetButton.removeAttribute("disabled");
  }
}

function reiniciarJogo() {
  numeroAleatorio = parseInt(Math.random() * 100 + 1);

  paragraph.textContent = "Escolha um número entre 1 a 100";
  titleMain.innerHTML =
    "<h1>Adivinhe o <span class='container__texto-azul'>número secreto</span></h1>";
}
