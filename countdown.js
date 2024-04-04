const dia = document.getElementById('dia')
const hora = document.getElementById ('hora')
const minuto = document.getElementById ('minuto')
const segundo = document.getElementById ('segundo')

const lancamento = '5 Dec 2024'

function countdown(){
    const datalanc = new Date(lancamento)
    const hoje = new Date()

    const segtotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segtotal /60 /60 /24);
    const finalHoras = Math.floor(segtotal/ 60/ 60)% 24;
    const finalMinutos = Math.floor (segtotal/ 60)% 60;
    const finalSegundos = Math.floor (segtotal)% 60;

    dia.innerHTML =  formatoTempoDia(finalDias) 
    hora.innerHTML =  formatoTempoHora(finalHoras)
    minuto.innerHTML =  formatoTempoMinuto(finalMinutos)
    segundo.innerHTML = formatoTempoSegundo(finalSegundos)
}
function formatoTempoDia(tempo){
    return tempo < 10? `0${tempo}D` : `${tempo}D`;
}
function formatoTempoHora(tempo){
    return tempo < 10? `0${tempo}H` : `${tempo}H`;
}
function formatoTempoMinuto(tempo){
    return tempo < 10? `0${tempo}M` : `${tempo}M`;
}
function formatoTempoSegundo(tempo){
    return tempo < 10? `0${tempo}S` : `${tempo}S`;
}

countdown();
setInterval(countdown, 1000)