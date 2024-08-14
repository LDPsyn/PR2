// Elementos del DOM
const loginPopup = document.getElementById('login-popup');
const closeBtn = document.querySelector('.close-btn');
const loginBtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const imageContainer = document.getElementById('image-container');

// Credenciales de acceso (puedes cambiarlas)
const validUsername = 'admin';
const validPassword = 'contraseña';

// Mostrar el popup de inicio de sesión
window.onload = function() {
    loginPopup.style.display = 'block';
}

// Cerrar el popup de inicio de sesión
closeBtn.onclick = function() {
    loginPopup.style.display = 'none';
}

// Manejar el evento de clic en el botón de inicio de sesión
loginBtn.addEventListener('click', () => {
    if (username.value === validUsername && password.value === validPassword) {
        // Ocultar el popup de inicio de sesión
        loginPopup.style.display = 'none';

        // Mostrar la imagen
        imageContainer.classList.remove('hidden');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});