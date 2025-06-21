var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex;margin-top: 55%"
}
function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaDireita.style = "display:flex; margin-top: 55%"
    setaEsquerda.style = "display:none"
}