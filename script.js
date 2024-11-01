// script.js

// Función para manejar la compra de productos
function comprarProducto(nombreProducto) {
    alert(`Has añadido ${nombreProducto} al carrito!`);
}

// Agrega el evento de clic a los botones de comprar
document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".btn-1");
    botones.forEach((boton, index) => {
        boton.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que se recargue la página
            const nombreProducto = `Producto ${index + 1}`;
            comprarProducto(nombreProducto);
        });
    });
});

// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector(".contact-form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        alert("¡Gracias por contactarnos!");
        formulario.reset();
    });
});
