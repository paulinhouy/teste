const inputTarefa = document.querySelector('.input-nova-tarefa')
const ulTarefas = document.querySelector('.tarefas');
const btnTarefa = document.querySelector( '.btn-tarefa');

btnTarefa.addEventListener('click',function(){
addLi(inputTarefa.value);

});

function criarLi(){
 const li = document.createElement('li');
  return li ;
}

function addLi(texto){
  const li = criarLi();
  li.innerHTML = texto;
  ulTarefas.appendChild(li);

}

