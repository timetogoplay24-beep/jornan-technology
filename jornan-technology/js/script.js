document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulario enviado (simulado).');
      form.reset();
    });
  }
  console.log("Sitio cargado correctamente.");
});
