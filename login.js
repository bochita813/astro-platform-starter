document.getElementById('form-login').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Inicia sesión con Firebase Auth
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Inicio de sesión exitoso
      const user = userCredential.user;
      alert("¡Bienvenido, " + user.email + "!");
      // Redirigir al dashboard o a la página principal de la plataforma
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error("Error al iniciar sesión: ", error);
      alert("Error al iniciar sesión: " + error.message);
    });
});
