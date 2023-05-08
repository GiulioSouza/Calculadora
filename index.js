function somar () {
    var num1 = Number(document.querySelector(`input#num1`).value)
    var num2 = Number(document.querySelector(`input#num2`).value)
    var resp0 = document.querySelector(`p#resul`)
    var resp1 = num1 + num2
    resp0.innerHTML = `Resultado: ${resp1}`
}