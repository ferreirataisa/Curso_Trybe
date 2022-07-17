// Requisito 3
const headerButton = document.querySelector('.header-button');

function mensagemAlerta() {
  const inputEmail = document.querySelector('#email-input').value;
  const inputPassword = document.querySelector('#password-input').value;

  if (inputEmail === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

headerButton.addEventListener('click', mensagemAlerta);

// Requisito 18
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

function enableSubmit() {
  submitBtn.disabled = !agreement.checked;
}
agreement.addEventListener('change', enableSubmit);

// Requisito 20 - Bônus
function charCountUpdate(string) {
  const strLength = string.target.maxLength - string.target.textLength;
  const strCounter = document.getElementById('counter');
  strCounter.innerHTML = strLength;
}

const textArea = document.getElementById('textarea');
textArea.addEventListener('keyup', charCountUpdate);

// Requisito 21

const submitForm = document.getElementById('submit-btn');
const selectedSubjects = [];
// Função que vai buscar as matérias que foram selecionadas, como é mais de uma opção, fazer o laço for e enviar essas opções selecionadas para a variável selectedSubjects. No html adicionei a classe = subject nas opcões com checkbox. Na variável subjects, a propriedade checked se refere às opcões selecionadas pelo usuário. Por fim retorna as opções que foram selecionadas pelo usuário.
function selectedSubjectsChecked() {
  const subjects = document.querySelectorAll('.subject:checked');
  for (let index = 0; index < subjects.length; index += 1) {
    selectedSubjects.push(` ${subjects[index].value}`);
  }
  return selectedSubjects;
}
// Função que vai pegar o resultado do form, primeiro temos que puxar os dados que queremos o resultado. Nas variáveis que temos o input[name='family'] por exemplo, o que queremos puxar é a propriedade selecionada (checked) pelo usuário. Se colocarmos o .value após puxarmos os dados não funciona.
function getFormResult() {
  const form = document.getElementById('evaluation-form');
  const firstName = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked');
  const evaluation = document.querySelector('input[name="rate"]:checked');
  // Nesse passo, vamos enviar para dentro da nossa variável form( que possui o id=evaluation-form) todos os dados puxados anteriormente, mas com a propriedade . value, pois queremos o valor desses dados, para melhor organização das concatenações estamos usando template literals ( aula de ontem).
  form.innerHTML = `
  <p> Nome: ${firstName.value} ${lastName.value} </p>
  <p> Email: ${email.value} </p>
  <p> Casa: ${house.value} </p>
  <p> Família: ${family.value} </p>
  <p> Matérias: ${selectedSubjectsChecked()} </p>
  <p> Avaliação: ${evaluation.value} </p>
  <p> Observações: ${textArea.value} </p>`;
}
// Ao clicar no botão a funcão getFormResult é acionada e os dados enviados.
submitForm.addEventListener('click', getFormResult);

// Abaixo o link com a referência da propriedade : checked
// https://www.delftstack.com/howto/javascript/javascript-get-value-of-checked-checkbox/
