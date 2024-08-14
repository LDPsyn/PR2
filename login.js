const loginBtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Credenciales de acceso (puedes cambiarlas)
const validUsername = 'admin';
const validPassword = 'contraseña';

loginBtn.addEventListener('click', () => {
    if (username.value === validUsername && password.value === validPassword) {
        // Establecer el indicador de inicio de sesión en el localStorage
        localStorage.setItem('loggedIn', true);

        // Redireccionar a la imagen
        window.location.href = 'imagen.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
