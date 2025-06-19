const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const ulTarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;

}

function addLi(valueInput){
    const li = criarLi()
    li.innerHTML = inputTarefa.value;
    ulTarefas.appendChild(li)
}

btnTarefa.addEventListener('click',function(){
    addLi();
})