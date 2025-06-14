const inputTarefa = document.querySelector('.input-nova-tarefa')
const ulTarefas = document.querySelector('.tarefas');
const btnTarefa = document.querySelector( '.btn-tarefa');

btnTarefa.addEventListener('click',function(){
console.log(inputTarefa.value)

});

function criarLi(){
  document.createElement('li');
  return li ;
}

function addLi(){
  const li = li;
  li.innerHTML = "texto";
ulTarefas.appendChild(li)
}