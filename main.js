document.addEventListener('DOMContentLoaded', () => {
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const btn = document.getElementById('btn');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', () => {
    console.log('click');
    const minimo = parseInt(min.value);
    const maximo = parseInt(max.value);
    const aleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    resultado.innerHTML = aleatorio;
  });
});



