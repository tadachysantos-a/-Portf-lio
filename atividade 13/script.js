function contar(){
    let saida = document.getElementById('saida');
    let imparoupar = 0
    let cont = 1
    while(cont <= 10){
        imparoupar = cont % 2;

        if(imparoupar == 0){
            saida.innerHTML += `<p> &#x1F449 <mark> ${cont}</mark></p>`;
        }else{
            saida.innerHTML += `<p> &#x1F449 ${cont}</p>`;
        }

        cont++;
    }
}
