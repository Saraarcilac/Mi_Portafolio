document.getElementById('2025').textContent = new Date().getFullYear();

// Manejo simple del formulario para mostrar estado
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if(form){
  form.addEventListener('submit', function(e){
    status.textContent = 'Enviando...';
    setTimeout(()=> status.textContent = 'Mensaje enviado. ¡Gracias!', 1200);
  });
}