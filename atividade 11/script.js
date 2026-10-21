function horas(){

    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');
    
    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`;
    
    if(min >= 11 && min <=20){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8Rvc_3Tvhi4X6YZ3hDRNhm0fF780Thna53Jch4O58w&s=10"</img>`;
    }
      if(min >= 21 && min <=30){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xoBG3ZOdx9ztEs2fepR5iLqYiyff_nIiAMVEh4ZMQA&s=10"</img>`;
    }
}