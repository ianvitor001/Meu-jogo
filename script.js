const timer = document.getElementById("timer")
const fim = document.getElementById("fim")

var controle = false

function iniciar() {
    controle = true
}

function ganhou() {c
    if(controle) {
        fim.innerHTML = "VOCÊ VENCEU!"
        fim.style.display = "block"
    }
}

function perdeu() {
    if(controle) {
        fim.style.display = "block"
    }
}