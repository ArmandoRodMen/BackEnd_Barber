console.log("Conectado a JavaScript");

function showTerms() {
    Swal.fire({
        title: 'Términos y condiciones',
        text: 'Aquí van los términos y condiciones de tu servicio. Asegúrate de leerlos detenidamente antes de aceptar.',
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
}

document.getElementById('gridCheck').addEventListener('change', function() {
    document.getElementById('submitBtn').disabled = !this.checked;
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("actualizarCita").addEventListener("click", function(e) {
        e.preventDefault();
        Toastify({
            text: "Actualizando cita...",
            backgroundColor: "blue",
            className: "info",
            duration: 3000 
        }).showToast();
    });
});