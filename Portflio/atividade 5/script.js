function maior(){
    let numer1;
    let Number2;

    numer1 = Number(prompt("Digite um número: "));
    Number2 = Number(prompt("Digite um número: "));

    if(numer1 > Number2){
        alert(numer1 + " é maior que o " + Number2)
    } else{
        alert(Number2 + " é maior que o " + numer1)
    }

}