async function obtenerServicios() {
    try {
        const res = await fetch("https://tp3-grupo10-luea.onrender.com/servicios");

        if (!res.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.log("Error al obtener servicios:", error);
        return []; // evita que rompa el código
    }
}

async function mostrarServicios() {
    try {
        const servicios = await obtenerServicios();

        const lista = document.getElementById("servicios-lista");
        lista.innerHTML = "";

        let html = "";

        servicios.forEach(servicio => {
            html += `<li>${servicio.nombre}</li>`;
        });

        lista.innerHTML = html;

    } catch (error) {
        console.log("Error al mostrar servicios:", error);
    }
}

mostrarServicios();