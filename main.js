// Rutas de las imágenes
const imagePaths = ['imagen1.png', 'imagen2.png'];
let currentImageIndex = 0;

// Elementos del DOM
const imageContainer = document.getElementById('image-container');
const imageElement = document.getElementById('image');

// Mostrar el contenedor de la imagen
imageContainer.style.display = 'flex';

// Iniciar el cambio de imágenes
setInterval(changeImage, 20000);

// Función para cambiar la imagen
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    imageElement.src = imagePaths[currentImageIndex];
}

// Función para refrescar la página sin mostrar el login
function refreshWithoutLogin() {
    // Obtener la URL actual
    var currentUrl = window.location.href;
  
    // Verificar si la URL contiene el token de autenticación
    if (currentUrl.includes('?token=')) {
      // Dividir la URL en partes
      var urlParts = currentUrl.split('?');
  
      // Obtener la parte de la URL después del token
      var urlWithoutToken = urlParts[0];
  
      // Agregar el token a la nueva URL
      var newUrl = urlWithoutToken + '?' + urlParts[1];
  
      // Recargar la página con la nueva URL
      window.location.replace(newUrl);
    } else {
      // Si no hay token, recargar la página normalmente
      window.location.reload();
    }
  }
  
  // Llamar a la función refreshWithoutLogin después de 5 horas (18000 segundos)
  setTimeout(refreshWithoutLogin, 18000000);