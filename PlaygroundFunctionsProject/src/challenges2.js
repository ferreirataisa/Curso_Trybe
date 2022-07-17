// Desafio 11

function generatePhoneNumber(telefone) {
//   let numeroTelefone = [];

//   for (index = 0; index < telefone.length; index += 1) {
//   numeroTelefone.push(telefone[index]);
//   }

//   if (telefone.length !== 11) {
//     return "Array com tamanho incorreto.";
//   } else if (telefone[index] < 0 && telefone[index] > 9) {
//     return "não é possível gerar um número de telefone com esses valores"
//   } 

//   return '(' + numeroTelefone[0] + numeroTelefone[1] + ') ' + numeroTelefone[2] + numeroTelefone[3] + numeroTelefone[4] + numeroTelefone[5] + numeroTelefone[6] + numeroTelefone[7] + numeroTelefone[8] + numeroTelefone[9] + numeroTelefone[10];
// }
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
}

// Desafio 12
function triangleCheck() {

} 
 

// Desafio 13

function hydrate(param1) {
  let quantidade = param1.match(/\d+/g);
  // console.log(quantidade);

  if (quantidade.length === 1) {
    let resultado = parseInt(quantidade[0], 10);
    return resultado + ' copo de água';
  } else if (quantidade.length === 2) {
    let soma1 = parseInt(quantidade[0], 10) + parseInt(quantidade[1], 10);
    return soma1 + ' copos de água';
  } else {
    let soma2 = parseInt(quantidade[0], 10) + parseInt(quantidade[1], 10) + parseInt(quantidade[2], 10);
    return soma2 + ' copos de água';
  }
}

// console.log(hydrate("1 cerveja"));
// console.log(hydrate("1 cachaça e 2 copos de vinho"));
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
