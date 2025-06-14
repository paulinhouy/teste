const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

function iniciaRelogio(){
    timer = setInterval(function(){
    segundos++
    relogio.innerHTML = criarHoraSegundos(segundos);
  },1000)
}

function criarHoraSegundos(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone: 'GMT'
  })
}
console.log(criarHoraSegundos(10))





iniciar.addEventListener('click',function(event){
iniciaRelogio();
})

pausar.addEventListener('click',function(event){
clearInterval(timer);
})

zerar.addEventListener('click',function(event){
})

