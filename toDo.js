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
    botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('title','apagar esta tarefa')
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

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){

        el.parentElement.remove();
    }
})