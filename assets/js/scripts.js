document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envio del formulario

    // Obtiene los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validacion de los campos que no esten vacios
    if (!name) {
      alert('Por favor, ingrese su nombre.');
      document.getElementById('name').focus();
      return;
    }

    if (!email) {
      alert('Por favor, ingrese su correo.');
      document.getElementById('email').focus();
      return;
    }

    // Validacion del correo con una expression regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, ingrese un correo válido.');
      document.getElementById('email').focus();
      return;
    }

    if (!message) {
      alert('Por favor, ingrese su mensaje.');
      document.getElementById('message').focus();
      return;
    }

    // Si todas las validaciones pasan actualiza los campos y envía el formulario
    document.getElementById('contactForm').reset(); // Actualiza todos los campos
    alert('Formulario enviado con éxito!');
  });
