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




//parametros de função


const functionReturn  = (valor1 = 3,valor2 = 2,valor3 = 0,valor4 = 1 ) => {
        return [valor1,valor2,valor3,valor4];
    
};
console.log(functionReturn(1,2,3));


function dizerNome(funcao){
    const nome = 'paulo';
    funcao(nome);

}

function dizerSobrenome(nome){
    const sobrenome = 'josé';
    console.log('olá'+ nome + ' ' + sobrenome + '!');
 


    dizerNomeDoMeio(nome,sobrenome)
}

function dizerNomeDoMeio(nome,sobrenome){
    const nomeDoMeio = "santos"
    console.log('olá'+ nome + ' ' + sobrenome + ' ' +  nomeDoMeio + '!')
}
dizerNome(dizerSobrenome);



//funcao que retorna outra função
//retorna uma função que retorna o nome + Rocha

function retornaName(name){
    
    return function(){
        return name + ' ' + 'Rocha'
    }
}
const nome = retornaName('Paulo');
const nome2 = retornaName('João');
console.log(nome());
console.log(nome2());


//funçoes de callback

function f1 (){
    console.log('f1')
    
}
f1()

    function f2(){
        console.log('f2');
         
    }
     if( f2() === true){
        function f3 (){
            console.log('f3');
        }}

        else{
            console.log('olá mundo')
        }
    

        function retornaObjeto(){
            return {
                nome: 'Paulo',
                sobrenome: 'Rocha',
                idade: 30,
                fala(){
                    console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`);
                            }
            }
        }
        //chamando a função e acessando o nome do objeto retornado
        const objeto = retornaObjeto();
        console.log(objeto.fala());

//functions que não vão para o escopo global



(function somar (a,b){
console.log( a + b );
const nome1 = 'paulo';
console.log(nome1)
}(2,10))

const nome1 = 'josé';
console.log(nome1)



function object(nome,sobrenome){
    return {
        nome: 'paulo',
        sobrenome:'josé',
        fala: function(){
        
            
            return `${this.nome}  ${this.sobrenome}`
        }
    }

}
const p1 = object()
const p2 = object('maria','joaquina')
console.log(p1.fala())
console.log(p2.fala())

//define propieties

function Produto  (nome,preco,estoque) {
    Object.defineProperty(this,'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: true, //pode alterar
        configurable: true //configuravel

    });

    

    Object.defineProperties (this, {
    nome: {
enumerable: true, //mostra a chave
        value: nome, //valor
        writable: true, //pode alterar
        configurable: true //configuravel

    },
    preco: {
        enumerable: true, //mostra a chave
        value: preco, //valor
        writable: true, //pode alterar
        configurable: true //configuravel

    },
    })
}
const p11 = new Produto ('Camiseta ',20,3);
console.log(Object.keys(p11));





const produto = {};
Object.defineProperty(produto, 'preco', {
  enumerable: true,
  configurable: true,
  get: function () {
    return this._preco;
  },
  set: function (valor) {
    if (typeof valor === 'number') {
      this._preco = valor;
    } else {
      console.log('Preço inválido');
    }
  }
});

produto.preco = 100;
console.log(produto.preco); // 100

produto.preco = 'caro'; // Preço inválido


//exercicios getter e setter 

const usuario =   {
}
Object.defineProperty(usuario,'senha',{
enumerable: false,
get: function (){
    return this.senha
},
set: function (valor){
    
}

})
console.log(usuario.senha)




