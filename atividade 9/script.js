/*variaveis para o jogo*/
let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;
/*as linhas abaixo são paar gerar um número aleatório*/
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
let num = min + Math.trunc(dif * aleatorio);
computador = min + Math.trunc(dif * aleatorio);

console.log(computador)

function jogar(){
    jogador = Number(prompt("Qual é o seu palpite?"));

    if(jogador < computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MAIOR</b></p>`;
    } else if(jogador > computador) {
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MENOR</b></p>`;
    } else if(jogador == computador){
         mostrar.innerHTML = `<p><b>PARABÉNS!!!</b> Você acertou! Eu tinha pensado no número ${computador}!!! </p>`;
    }
    console.log(jogador)
}
