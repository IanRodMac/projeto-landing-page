var setaEsquerda = window.document.getElementById ("setaEsquerda")
var leonardo = window.document.getElementById ("leonardo")
var samantha = window.document.getElementById ("samantha")
var bruna = window.document.getElementById ("bruna")
var setaDireita = window.document.getElementById ("setaDireita")

function rolarParaDireita() {
    leonardo.style = "display: none"
    bruna.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex"
}

function rolarParaEsquerda() {
    bruna.style = "display: none"
    leonardo.style = "display: flex"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}
