// Verificar si el usuario ha iniciado sesión
if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}

// Evitar que el usuario vuelva a la página de inicio de sesión después de iniciar sesión
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('loggedIn');
});
