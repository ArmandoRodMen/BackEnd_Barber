console.log("Conectado a JavaScript");

function showTerms() {
    const privacyNoticeHtml = `
    <div style="max-height: 400px; overflow-y: auto; text-align: left;">
        <h2>Aviso de Privacidad de THE BARBER PLACE</h2>
        <p><strong>Fecha de efectividad:</strong> [Fecha de hoy]</p>
        <p><strong>1. Introducción</strong><br>
        En THE BARBER PLACE, valoramos su privacidad y nos esforzamos por proteger su información personal. Este aviso detalla nuestras prácticas en relación con la recopilación, uso y divulgación de la información que obtenemos a través de nuestra plataforma.</p>
        <p><strong>2. Información que Recopilamos</strong></p>
        <ul>
            <li>Información proporcionada por el usuario: Incluye datos como nombre, dirección de correo electrónico, número de teléfono, preferencias de servicio y datos de pago.</li>
            <li>Información recopilada automáticamente: Como la dirección IP, tipo de dispositivo, ubicación geográfica, páginas visitadas y cookies.</li>
        </ul>
        <p><strong>3. Cómo Utilizamos su Información</strong></p>
        <ul>
            <li>Facilitar la reserva y gestión de citas.</li>
            <li>Procesar transacciones y enviar confirmaciones y recordatorios.</li>
            <li>Ofrecer soporte al cliente y responder a consultas.</li>
            <li>Mejorar la funcionalidad y seguridad de nuestra plataforma.</li>
            <li>Enviar comunicaciones de marketing, en la medida en que esto esté en conformidad con las preferencias que usted nos ha comunicado.</li>
        </ul>
        <p><strong>4. Cómo Compartimos su Información</strong></p>
        <ul>
            <li>Proveedores de servicios que realizan funciones en nuestro nombre, como procesamiento de pagos y análisis de datos.</li>
            <li>Socios comerciales con los que ofrecemos servicios conjuntamente.</li>
            <li>Entidades legales, si es requerido por ley o para proteger nuestros derechos o los de nuestros usuarios.</li>
        </ul>
        <p><strong>5. Seguridad de la Información</strong><br>
        Implementamos medidas técnicas y organizativas para proteger su información personal contra el acceso no autorizado, la pérdida accidental, la alteración y la divulgación indebida.</p>
        <p><strong>6. Sus Derechos y Opciones</strong></p>
        <ul>
            <li>Acceder, rectificar o borrar su información personal.</li>
            <li>Retirar el consentimiento para el uso de sus datos.</li>
            <li>Limitar el uso y divulgación de su información.</li>
            <li>Solicitar una copia de su información en un formato estructurado y de uso común.</li>
        </ul>
        <p><strong>7. Retención de Datos</strong><br>
        Retenemos su información personal solo durante el tiempo necesario para los fines establecidos en este aviso y de acuerdo con nuestras obligaciones legales y regulatorias.</p>
        <p><strong>8. Transferencias Internacionales</strong><br>
        Su información personal puede ser transferida y procesada en países fuera de su país de residencia, donde las leyes de protección de datos pueden diferir. Nos aseguramos de que tales transferencias se realicen con las debidas garantías.</p>
        <p><strong>9. Uso de Cookies</strong><br>
        Utilizamos cookies y tecnologías similares para ayudar a personalizar su experiencia y recopilar datos para fines de seguimiento y análisis.</p>
        <p><strong>10. Cambios a este Aviso</strong><br>
        Nos reservamos el derecho a modificar este aviso de privacidad. Cualquier cambio será comunicado a través de nuestra plataforma o por correo electrónico.</p>
        <p><strong>11. Contacto</strong><br>
        Si tiene preguntas sobre este aviso o necesita hacer uso de sus derechos, contáctenos en: [Información de contacto].</p>
    </div>`;

    Swal.fire({
        title: 'Aviso de Privacidad',
        html: privacyNoticeHtml,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#20447c',
        width: '800px'
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