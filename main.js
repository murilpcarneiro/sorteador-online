document.addEventListener('DOMContentLoaded', () => {
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const btn = document.getElementById('btn');
  const btnpar = document.getElementById('btn-par');
  const quantidade = document.getElementById('quantidade');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', () => {
    const minimo = parseInt(min.value);
    const maximo = parseInt(max.value);
    const qtd = parseInt(quantidade.value);
    const numeros = [];

    for (let i = 0; i < qtd; i++) {
      const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      numeros.push(numero);
    }

    resultado.textContent = numeros.join(', ');
  });

  btnpar.addEventListener('click', () => {
    const minimo = parseInt(min.value);
    const maximo = parseInt(max.value);
    const qtd = parseInt(quantidade.value);
    const numeros = [];

    for (let i = 0; i < qtd; i++) {
      const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      if (numero % 2 === 0) {
        numeros.push(numero);
      }
      else {
        i--;
      }
    }

    resultado.textContent = numeros.join(', ');
  });


});



