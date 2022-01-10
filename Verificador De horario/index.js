var data = new Date

var tempo = [
    horas = data.getHours(),
    minutos = data.getMinutes(),
    segundos = data.getSeconds()
]

var horario = document.getElementById('horario')

var imgTempo = [
    imgManhã = document.getElementById('manhã'),
    imgTarde = document.getElementById('tarde'),
    imgNoite = document.getElementById('noite')
]

if (horas >= 6 && horas < 12){
    horario.innerHTML = `Agora são ${horas}:${minutos}:${segundos} horas! <br> Bom Dia`
    document.body.style.backgroundColor = '#ffb300'
    imgManhã.style.display = 'block'

} else if (horas >= 12 && horas < 18){
    horario.innerHTML = `Agora são ${horas}:${minutos} horas! <br> Boa Tarde`
    document.body.style.backgroundColor = '#a5512a'
    imgTarde.style.display = 'block'

} else {
    horario.innerHTML = `Agora são ${horas}:${minutos}:${segundos} horas! <br> Boa Noite`
    document.body.style.backgroundColor = '#15153d'
    imgNoite.style.display = 'block'
}