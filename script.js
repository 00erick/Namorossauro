function abrirEnvelope() {
  const topo = document.querySelector('.topo');
  topo.style.transform = 'rotateX(-180deg)';

  setTimeout(() => {
    window.location.href = "carta.html";
  }, 1000);
}

// Função para gerar corações aleatórios
function criarCoracoes(qtd = 30) {
  const container = document.getElementById('hearts-container');

  for (let i = 0; i < qtd; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    // Posições aleatórias dentro da tela
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.left = Math.random() * 100 + 'vw';

    // Tamanho aleatório (entre 2vh e 5vh)
    const size = 2 + Math.random() * 3;
    heart.style.fontSize = size + 'vh';

    // Delay da animação para cada coração ser diferente
    heart.style.animationDelay = (Math.random() * 3) + 's';

    container.appendChild(heart);
  }
}

// Gera 30 corações na tela quando o site carrega
window.onload = () => {
  criarCoracoes(30);
};


// Corações animados
function criarCoracoes(qtd = 25) {
  const container = document.getElementById('hearts-container');

  for (let i = 0; i < qtd; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.left = Math.random() * 100 + 'vw';
    const size = 2 + Math.random() * 3;
    heart.style.fontSize = size + 'vh';
    heart.style.animationDelay = (Math.random() * 3) + 's';

    container.appendChild(heart);
  }
}

// Executa só se for a página da carta
window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.carta-page')) {
    criarCoracoes(25);
  }
});
