var verificar = document.getElementById('verificar')
var anoNascimento = document.getElementById('textoAno')

function verificarDados(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var res = document.getElementById('res')

    if (anoNascimento.value > anoAtual || anoNascimento.value < 1900 || anoNascimento.value.length == 0) {
        alert('[ERRO] Ano De Nascimento Invalido')
    } else {
        var radsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        if (radsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10){
                res.innerHTML = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'bebê-m.png')
            } else if (idade < 21){
                res.innerHTML = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50){
                res.innerHTML = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'Senhor-m.jpg')
            } else {
                res.innerHTML = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                res.innerHTML = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'mulher/bebê-f.jpg')
            } else if (idade < 21){
                res.innerHTML = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'mulher/jovem-f.jpg')
            } else if (idade < 50){
                res.innerHTML = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'mulher/senhora-f.jpg')
            } else {
                res.innerHTML = `Você é uma mulher de ${idade} anos!`
                img.style.display = 'block'
                img.setAttribute('src', 'mulher/idosa-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

verificar.addEventListener('click', verificarDados)
