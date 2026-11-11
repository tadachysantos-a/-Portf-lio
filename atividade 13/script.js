function contar(){
    let saida = document.getElementById('saida');

    let cont = 1
    while(cont <= 10){
        saida.innerHTML += `<p> &#x1F449 <mark> ${cont}</p>`;
        cont++;
    }
}