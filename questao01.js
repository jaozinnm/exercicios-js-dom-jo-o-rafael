function inserirTitulo() {

  const textoDigitado = document.getElementById('txt-titulo').value;

  
  const titulo = document.getElementById('titulo');


  titulo.innerText = textoDigitado;

  
  titulo.style.color = 'blue';
}
