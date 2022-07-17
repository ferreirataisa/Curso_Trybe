// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2 );
}

// Desafio 3
function splitSentence(param1) {
  return (param1.split(" "));
}

// Desafio 4
function concatName(array) {
  return (array[array.length -1] + ", " + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = {
    wins: wins * 3,
    ties: ties * 1
  }
  let somaPontos = pontos.wins + pontos.ties;

  return(somaPontos);
}

// Desafio 6
function highestCount(array) {
    
  let resultadoFinal = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < array.length; index += 1) {
    
    if (array[index] > maiorNumero) {
      
      maiorNumero = array[index];
    }
  }  
  for (let index = 0; index < array.length; index += 1) {
  
    if (array[index] === maiorNumero) {
      resultadoFinal += 1;  
    }
  }
  return resultadoFinal;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let posicaoCat1 = (cat1 - mouse);
  let posicaoCat2 = (cat2 - mouse);
  //ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    if (Math.abs(posicaoCat1) < Math.abs(posicaoCat2)) {
      return("cat1");
    } else if (Math.abs(posicaoCat1) > Math.abs(posicaoCat2)) {
      return("cat2");
    } else {
      return("os gatos trombam e o rato foge");
  } 
}

// Desafio 8
function fizzBuzz(array) {
  
  let resultadoFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultadoFizzBuzz.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      resultadoFizzBuzz.push("fizz");
    } else if (array[index] % 5 === 0) {
      resultadoFizzBuzz.push("buzz");
    } else {
      resultadoFizzBuzz.push("bug!");
    }
  }
  return resultadoFizzBuzz
}

// Desafio 9
function encode(stringEncode) {

  let funcaoEncode = '';
  
  for (let index = 0; index < stringEncode.length; index += 1) {
    switch (true) {
    case stringEncode[index] === 'a':
      funcaoEncode += '1';
      break;
    case stringEncode[index] === 'e':
      funcaoEncode += '2';
      break;
    case stringEncode[index] === 'i':
      funcaoEncode += '3';
      break;
    case stringEncode[index] === 'o':
      funcaoEncode += '4';
      break;
    case stringEncode[index] === 'u':
      funcaoEncode += '5';
      break;
    default:
      funcaoEncode += stringEncode[index];
    }
  }
  return funcaoEncode;
}

function decode(stringDecode) {
  
  let funcaoDecode = '';
  
  for (let index = 0; index < stringDecode.length; index += 1) {
    switch (true) {
    case stringDecode[index] === '1':
      funcaoDecode += 'a';
      break;
    case stringDecode[index] === '2':
      funcaoDecode += 'e';
      break;
    case stringDecode[index] === '3':
      funcaoDecode += 'i';
      break;
    case stringDecode[index] === '4':
      funcaoDecode += 'o';
      break;
    case stringDecode[index] === '5':
      funcaoDecode += 'u';
      break;
    default:
      funcaoDecode += stringDecode[index];
    }
  }
  return funcaoDecode;
}

// Desafio 10
function techList(tech, name) {
  
  let palavrastecnologia = [];
  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    palavrastecnologia.push({
      tech: tech[index], 
      name: name
    });
  }
  
  if (palavrastecnologia.length === 0) {
    return 'Vazio!';
  }
  
  return palavrastecnologia;
}

// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
