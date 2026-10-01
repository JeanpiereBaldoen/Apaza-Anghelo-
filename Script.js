document.addEventListener('DOMContentLoaded', () => {
    const formVuelos = document.getElementById('form-vuelos');
    const seccionResultados = document.getElementById('resultados');
    const listaVuelos = document.getElementById('lista-vuelos');

    // Manejar el evento de búsqueda de vuelos
    formVuelos.addEventListener('submit', (e) => {
        e.preventDefault();

        const origen = document.getElementById('origen').value.trim();
        const destino = document.getElementById('destino').value.trim();
        const fecha = document.getElementById('fecha').value;
        const pasajeros = document.getElementById('pasajeros').value;

        // Mostrar sección de resultados
        seccionResultados.style.display = 'block';
        
        // Simular búsqueda generando resultados dinámicos basados en la entrada
        listaVuelos.innerHTML = `
            <div class="flight-item">
                <div class="flight-details">
                    <h4>Vuelo Directo: ${origen.toUpperCase()} ➔ ${destino.toUpperCase()}</h4>
                    <p>Fecha: ${fecha} | Pasajeros: ${pasajeros} | Aerolínea: AeroPerú (AP-102)</p>
                </div>
                <div class="flight-price">$120 USD</div>
            </div>
            <div class="flight-item">
                <div class="flight-details">
                    <h4>Vuelo con escala: ${origen.toUpperCase()} ➔ ${destino.toUpperCase()}</h4>
                    <p>Fecha: ${fecha} | Pasajeros: ${pasajeros} | Aerolínea: AeroPerú (AP-204)</p>
                </div>
                <div class="flight-price">$89 USD</div>
            </div>
        `;

        // Desplazarse suavemente hacia los resultados
        seccionResultados.scrollIntoView({ behavior: 'smooth' });
    });

    // Interactividad para los botones de las tarjetas de destinos populares
    const botonesCard = document.querySelectorAll('.btn-card');
    botonesCard.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const card = e.target.closest('.destino-card');
            const destinoNombre = card.querySelector('h3').textContent;
            
            // Autocompletar el campo de destino en el formulario
            document.getElementById('destino').value = destinoNombre;
            
            // Desplazarse hacia arriba al buscador
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Enfocar el origen para que el usuario complete su búsqueda
            document.getElementById('origen').focus();
        });
    });
});