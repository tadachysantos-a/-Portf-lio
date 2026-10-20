function estacao(){
    let mes = prompt("Digite o mẽs por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado')

    mes = mes.toUpperCase();

    console.log(mes)


    if(mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'DEZEMBRO') {
        alert("Esse mês está na estação do Verão")
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
        alert("Esse mês está na estação do Outono")
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        alert("Esse mês está na estação do Inverno")
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        alert("Esse mês está na estação do Primavera")
    }

    //O Usuário informa o mes por extenso e o sistema informa a estacao daquele mes.
    

}