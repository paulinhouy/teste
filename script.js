const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click',function(event){
setInterval(() => {
  let date = new Date();
  date.toLocaleDateString
  console.log('iniciei');
}, 1000);
})

pausar.addEventListener('click',function(event){
setTimeout(() => {
    console.log('funcionei')
  
}, 1000); // 1000 milissegundos = 1
})

zerar.addEventListener('click',function(event){
alert('botão clicado');
})

