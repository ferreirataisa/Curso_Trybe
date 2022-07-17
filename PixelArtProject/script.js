// Requisito 2
const listaCores = document.getElementById('color-palette');

function criarCores(quantidade, cor) {
  for (let index = 0; index < quantidade; index += 1) {
    const qualCor = document.createElement('span');
    qualCor.className = 'color';
    listaCores.appendChild(qualCor);

    for (let index = 0; index < cor.length; index += 1) {
      const corEscolhida = document.querySelector('span');
      corEscolhida.id = cor[index];
      listaCores.appendChild(corEscolhida);
    }
  }
}
criarCores(4, (['preto', 'vermelho', 'azul', 'amarelo']));

// Requisito 4

const quadroPixel = document.getElementById('pixel-board');

function gerarQuadro(tamanho) {
  for (let linha = 0; linha < tamanho; linha += 1) {
    const gerarLinha = document.createElement('div');
    gerarLinha.className = 'pixel-linha';
    quadroPixel.appendChild(gerarLinha);

    for (let coluna = 0; coluna < tamanho; coluna += 1) {
      const gerarColuna = document.createElement('div');
      gerarColuna.className = 'pixel';
      gerarLinha.appendChild(gerarColuna);
    }
  }
}
gerarQuadro(5);

// Requisito 6

function criarClasse() {
  document.getElementsByClassName('color')[0].classList.add('selected');
}
criarClasse();

// Requisito 7
// const listaCores = document.getElementById('color-palette');
const paletaCores = document.querySelectorAll('.color');

const corPreto = document.getElementById('preto');
corPreto.addEventListener('click', clicarPreto);

function clicarPreto() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  corPreto.classList.add('selected');
}


const corVermelho = document.getElementById('vermelho');
corVermelho.addEventListener('click', clicarVermelho);

function clicarVermelho() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  corVermelho.classList.add('selected');
}


const corAzul = document.getElementById('azul');
corAzul.addEventListener('click', clicarAzul);

function clicarAzul() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  corAzul.classList.add('selected');
}


const corAmarelo = document.getElementById('amarelo');
corAmarelo.addEventListener('click', clicarAmarelo);

function clicarAmarelo() {
  for (let index = 0; index < paletaCores.length; index += 1) {
    paletaCores[index].classList.remove('selected');
  }
  corAmarelo.classList.add('selected');
}


// Requisito 8
// const paletaCores = document.querySelectorAll('.color');
// const quadroPixel = document.getElementById('pixel-board');
const cadaQuadrado = document.querySelectorAll('.pixel');

for (let index = 0; index < cadaQuadrado.length; index += 1) {
cadaQuadrado[index].addEventListener('click', pintar);
}

function pintar() {
  const selected = document.querySelector('.selected');
  const recuperaCor = getComputedStyle(selected).backgroundColor;
  // ref: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
  const pixel = event.target;
  pixel.style.backgroundColor = recuperaCor;
}

// Requisito 9 - Botão

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limpar);

function limpar() {
  for (let index = 0; index < 25; index += 1) {
    cadaQuadrado[index].style.backgroundColor = 'white';
  }
}

// Requisito 10
const botaoVqv = document.getElementById('generate-board');
botaoVqv.addEventListener('click', gerarNovoQuadro);

const input = document.getElementById('board-size');

function gerarNovoQuadro(parametro) {
  let deletarQuadro = document.querySelector('#pixel-board');
  deletarQuadro.innerHTML = "";
  // ref: https://www.horadecodar.com.br/2021/06/27/remover-todos-os-elementos-filhos-com-javascript/
  gerarQuadro(input.value);
  
  const cadaQuadrado = document.querySelectorAll('.pixel');

  for (let index = 0; index < cadaQuadrado.length; index += 1) {
cadaQuadrado[index].addEventListener('click', pintar);
}

function pintar() {
  const selected = document.querySelector('.selected');
  const recuperaCor = getComputedStyle(selected).backgroundColor;
  // ref: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
  const pixel = event.target;
  pixel.style.backgroundColor = recuperaCor;
}

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limpar);

function limpar() {
  for (let index = 0; index < cadaQuadrado.length; index += 1) {
    cadaQuadrado[index].style.backgroundColor = 'white';
  }
}

parametro = input.value;
if (input.value < 1 || input.value === "") {
  alert('Board inválido!');
} else if (input.value < 5) {
  input.value = 5;
  gerarNovoQuadro(parametro);
} else if (input.value > 50) {
  input.value = 50;
  gerarNovoQuadro(parametro);
}
}

// Requisito 12
// ref: https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript
function corAleatoria1() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.getElementById("vermelho").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
corAleatoria1();

function corAleatoria2() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.getElementById("azul").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
corAleatoria2();

function corAleatoria3() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.getElementById("amarelo").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
corAleatoria3();
