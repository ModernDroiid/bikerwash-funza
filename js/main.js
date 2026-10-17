// Scroll suave con la rueda del mouse y en los enlaces del menú (librería Lenis).
// Si la librería no carga, la página sigue funcionando con el scroll normal.
if (window.Lenis) {
  new Lenis({ autoRaf: true, anchors: true });
}

// Comparador antes/después: al mover el control se actualiza la posición de la línea.
document.querySelectorAll('[data-before-after]').forEach((comparador) => {
  const control = comparador.querySelector('.ba__range');
  control.addEventListener('input', () => {
    comparador.style.setProperty('--pos', control.value + '%');
  });
});
