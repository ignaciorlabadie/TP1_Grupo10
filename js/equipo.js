const contenedor = document.getElementById('contenedor-equipo');

const cargarEquipo = async () => {
    try {
        const res = await fetch('https://tp3-grupo10-luea.onrender.com/equipo');
        const data = await res.json();

        data.forEach(persona => {
            contenedor.innerHTML += `
                <div class="card">
                    <div class="card-img">
                        <img src="${persona.foto}" alt="Foto de ${persona.nombre}">
                    </div>
                    <div class="card-description">
                        <h3>${persona.nombre}</h3>
                        <p><strong>${persona.rol}</strong></p>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.log('Error:', error);
    }
};

cargarEquipo();