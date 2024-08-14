// Elementos del DOM
const loginPopup = document.getElementById('login-popup');
const closeBtn = document.querySelector('.close-btn');
const loginBtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const imageContainer = document.getElementById('image-container');
const imageElement = document.getElementById('image');

// Credenciales de acceso (puedes cambiarlas)
const validUsername = 'admin';
const validPassword = 'contraseña';

// Rutas de las imágenes
const imagePaths = ['imagen1.jpg', 'imagen2.jpg'];
let currentImageIndex = 0;

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

        // Mostrar el contenedor de la imagen
        imageContainer.style.display = 'flex';

        // Iniciar el cambio de imágenes
        setInterval(changeImage, 20000);
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Función para cambiar la imagen
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    imageElement.src = imagePaths[currentImageIndex];
}