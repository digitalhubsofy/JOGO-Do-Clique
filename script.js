const quadrado = document.getElementById('quadrado');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');

let podeClicar = false;
let tempoInicial;

function mudarCor() {
  quadrado.style.backgroundColor = 'green';
  podeClicar = true;
  tempoInicial = Date.now();
}

function iniciarJogo() {
  resultado.textContent = '';
  quadrado.style.backgroundColor = 'red';
  podeClicar = false;

  const tempoAleatorio = Math.random() * 3000 + 2000; // entre 2 e 5 segundos
  setTimeout(mudarCor, tempoAleatorio);
}

quadrado.addEventListener('click', () => {
  if (!podeClicar) {
    resultado.textContent = 'Você clicou antes da hora!';
    iniciarJogo();
  } else {
    const tempoFinal = Date.now();
    const tempoReacao = (tempoFinal - tempoInicial) / 1000;
    resultado.textContent = `Tempo de reação: ${tempoReacao.toFixed(3)} segundos`;
    iniciarJogo();
  }
});

iniciarJogo();
