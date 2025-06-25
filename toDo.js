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
    salvarTarefas();
})

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){

        el.parentElement.remove();
    }
})
function salvarTarefas(){
    const liTarefas = ulTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','')
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto)
        console.log(listaDeTarefas)


        
    }
}

const functionReturn  = (valor1 = 3,valor2 = 2,valor3 = 0,valor4 = 1 ) => {
        return [valor1,valor2,valor3,valor4];
    
};
console.log(functionReturn(1,2,3));
const sobrenome = "José";
function dizerOla(nome) {
  console.log("Olá, " + nome + "!"+ sobrenome );
  
}

function dizerSobrenome(nome){
    const sobrenome = "José";
    console.log("Olá, " + nome + "!"+ sobrenome );
}

function processarEntradaUsuario(funcao) {
  const nome = "Maria"; // Simulando entrada do usuário
  funcao(nome);
}

processarEntradaUsuario(dizerOla);
processarEntradaUsuario(dizerSobrenome);

