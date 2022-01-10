var textNumberOne = document.getElementById('NumberTxT-One')
var textNumberTwo = document.getElementById('NumberTxT-Two')

function Somar(){
    var numberValueOne = Number(textNumberOne.value)
    var NumberValueTwo = Number(textNumberTwo.value)

    var res = document.getElementById('resultado')
    res.innerHTML = `${numberValueOne + NumberValueTwo}`
}


var somar = document.getElementById('somar')
somar.addEventListener('click', Somar)