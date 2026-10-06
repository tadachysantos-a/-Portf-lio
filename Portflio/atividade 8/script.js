    let cont_sorte = 0;
    let cont_azar = 0;


function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
    

    if(num > 50){
        cont_sorte++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73vabNaiRqjrWLtQS7UfG60ucS_8OIsRWjZ84IDcPeA&s=10> `;
    }else {
        cont_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src= https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScNDe75HMQ5L_R4uqFdLCRhsbi5JphG7B5STnRrabhw&s=10> `;
    }
}