function campeonato() {
   let times
   let inscritos
   let sobra


   inscritos = Number(prompt("Qual a quantidade de inscritos? "));


   if (inscritos === null || !Number.isFinite(inscritos) || inscritos < 0) {
       alert("Informe uma quantidade válida de inscritos.");
       return;
   }


   times = Math.floor(inscritos / 3);
   sobra = inscritos % 3;


   let mostrar = document.getElementById('resultado');
   mostrar.innerHTML = `<p>Quantidade de inscritos: ${inscritos}</p>
                        <p>Total de times: ${times}</p>
                        <p>Participantes que sobraram: ${sobra}</p>`;
}


