const button = document.getElementById('criar-tarefa').addEventListener('click', adicionarLista);

function adicionarLista() {
  const input = document.getElementById('texto-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.classList.add('tarefas');
  li.addEventListener('click', corDeFundo);
  li.addEventListener('dblclick', riscarTarefa);
  
  function corDeFundo(event) {
    const li2 = document.getElementsByTagName('li');
    for (let index = 0; index < li2.length; index += 1) {
      li2[index].classList.remove('item-selected');
    }
    event.target.classList.add('item-selected');
  }

  function riscarTarefa(event) {
    event.target.classList.toggle('completed')
  }

  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
}


// Requisito 10
const botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagar);

function apagar() {
  const lista = document.querySelector('ol');
  lista.innerHTML = '';
}


// Requisito 11
const botaoRemover = document.getElementById('remover-finalizados');
botaoRemover.addEventListener('click', remover);

function remover() {
  const removerTarefa = document.querySelectorAll('.completed');
  for (let index = 0; index < removerTarefa.length; index += 1) {
    removerTarefa[index].remove('li');
  }
}

