document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-registro");
    const mensajeExito = document.getElementById("mensaje-exito");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const plan = document.getElementById("plan").value;

        if (nombre.trim() !== "") {

            formulario.style.display = "none";
            mensajeExito.style.display = "block";
            mensajeExito.style.color = "#00E5FF";
            mensajeExito.innerHTML = `<strong>¡Felicidades ${nombre}!</strong><br>Te has registrado exitosamente en el plan <em>${plan.toUpperCase()}</em>.`;
        }
    });
});