const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const ulTarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
    
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return 
        addLi(inputTarefa.value);
        clearInput();
    }
    
})

function criaBotaoApagar(li){
    li.innerHTML +=  ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML= 'Apagar';
    li.appendChild(botaoApagar);
}
function clearInput(){
inputTarefa.value = "";
inputTarefa.focus();
}

function addLi(valueInput){
    const li = criarLi()
    li.innerHTML = inputTarefa.value;
    ulTarefas.appendChild(li)
    clearInput();
    criaBotaoApagar(li);
}

btnTarefa.addEventListener('click',function(){
    addLi();
    clearInput();
})