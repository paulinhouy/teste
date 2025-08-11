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
        nome: nome || 'paulo',
        sobrenome:sobrenome || 'jose',
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
configurable: false,
get: function (){
    return this._senha

},
set: function (valor){
    if(valor !== 'string' && valor.length >= 6){
        this._senha = valor;
        
    }
    else {
        console.log('digite uma senha com no minimo 6 numeros')
    }

    
}

})

Object.defineProperty(usuario,'preco',{
enumerable: false,
configurable: false,
get: function (){
    return this._preco

},
set: function (valor){

    if(typeof valor === 'number' && String(valor).length <= 3 ){
        this._preco = valor;
    }
    else{
        console.log('digite um preco valido')
    }
    
}

})

usuario.preco = 15
console.log(usuario.preco)
usuario.senha = '12345331'
console.log(usuario.senha)
usuario.senha = '1231'
console.log(usuario.senha)




//Prototypes 

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando um método usando defineProperty no prototype
Object.defineProperty(Pessoa.prototype, 'falar', {
  value: function () {
    console.log(`Meu nome é ${this.nome}`);
  },
  writable: true,       // Pode ser sobrescrita
  enumerable: false,    // Não aparece em for...in
  configurable: true    // Pode ser apagada
});

const p111 = new Pessoa('Paulo', 18);

p111.falar(); // Meu nome é Paulo

// Testando a enumerabilidade
for (let chave in p111) {
  console.log(chave); // Mostra apenas nome e idade, não mostra 'falar'
}



//Exercício 1: Criar método com defineProperty no prototype
//Crie uma função construtora Carro(marca, modelo) e adicione um método chamado descricao ao prototype usando Object.defineProperty. Esse método deve retornar:
// "Este carro é um [marca] modelo [modelo]".
//Objetivo: praticar defineProperty com value.

function Carro (marca,modelo) {
    this.marca = marca,
    this.modelo = modelo
}
Object.defineProperty(Carro.prototype,'falar', {
    value: function (){
        console.log(`Este carro é um ${this.marca} modelo ${this.modelo}`)
    },
    writable: true,
  enumerable: true,
  configurable: true

})
const Carrinho = new Carro('fiat','XYZ')
Carrinho.falar() 









 /* Exercício: Conta Bancária com Saldo Protegido
Crie uma função construtora chamada ContaBancaria(cliente, saldoInicial).
Você deve:
Armazenar o cliente e o saldoInicial.
Usar Object.defineProperty para:
Criar uma propriedade chamada saldo no prototype, que seja apenas de leitura (get, sem set), e retorne o saldo atual.
Criar no prototype um método depositar(valor) que aumenta o saldo.
Criar no prototype um método sacar(valor) que diminui o saldo, mas só se houver saldo suficiente. Caso contrário, mostrar mensagem: "Saldo insuficiente". */

function ContaBancaria (cliente,saldoInicial) {
    this.cliente = cliente
    this._saldo = saldoInicial;

}
Object.defineProperty(ContaBancaria.prototype,'saldo',{
    get:function () {
    return this._saldo
    }
})

ContaBancaria.prototype.depositar = function (valor){
    this._saldo += valor
}
ContaBancaria.prototype.sacar = function (valor){
    this._saldo -= valor
}

const conta = new ContaBancaria('paulo',1000)
console.log(conta)

conta.depositar(100)
console.log(conta.saldo)

conta.sacar(500)
console.log(conta.saldo)




//herança com prototypes e metodos de functions construtor

function Product (nome,preco){
    this.nome = nome;
    this._preco = preco;

}
Object.defineProperty(Product.prototype,'mostrar',{
    get: function () {
        return this._preco
    }

})

Product.prototype.aumenta = function (valor){
    this._preco += valor;
}

Product.prototype.diminui = function (valor){
    this._preco -= valor;
}


function Camiseta (nome,preco,cor){
    Product.call(this, nome, preco); // pega nome e idade de Pessoa
    this.cor = cor;

}
const OlaProduto = new Product('paulo',17)
console.log(OlaProduto)
OlaProduto.aumenta(50)
console.log(OlaProduto._preco)
OlaProduto.diminui(60)
console.log(OlaProduto._preco)



Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

const OlaCamiseta = new Camiseta('tshirt',17,'red')
console.log(OlaCamiseta)
OlaCamiseta.aumenta(50)
console.log(OlaCamiseta._preco)
console.log(Product.prototype)
console.log(Camiseta.prototype)




//Objeto Map()

const objetoMap = new Map()

objetoMap.set('nome','paulo');
objetoMap.set('fruta','banana');
objetoMap.set(12,'idade');

console.log(objetoMap.get('nome'));
console.log(objetoMap.get('fruta'));
console.log(objetoMap.get('idade'))


