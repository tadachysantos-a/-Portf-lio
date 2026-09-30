function calcular() {
    let nota1trim = Number(prompt("Digite a nota do primeiro trimestre:"))
    let nota2trim = Number(prompt("Digite a nota do segundo trimestre:"))

    let resultado = 180-(nota1trim+nota2trim);

    if(resultado <= 0){
        alert("Parabéns! Você já está aprovado por nota!!!");
    } else {
           alert("Você precisa de " + resultado + "para ser aprovado ");
    }

}