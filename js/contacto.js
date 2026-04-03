document.addEventListener("DOMContentLoaded", function () {
  // Get the main elements needed for the map feature
  const contenedorMapa = document.getElementById("mapa");
  const botonRuta = document.getElementById("btn-ruta");
  const estadoRuta = document.getElementById("estado-ruta");

  // Stop execution if required elements are missing or Leaflet is not loaded
  if (!contenedorMapa || !botonRuta || !estadoRuta || typeof L === "undefined") {
    console.error("Elementos del mapa no encontrados o Leaflet no cargado");
    return;
  }

  // Fixed coordinates of the business location
  const ubicacionBar = [38.9945, -1.8581];

  // Create the map and center it on the business location
  const mapa = L.map("mapa").setView(ubicacionBar, 15);

  // Load OpenStreetMap tiles into the map
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  // Create a custom icon for the business marker
  const iconoNegocio = L.divIcon({
    html: '<i class="fa-solid fa-utensils" style="font-size: 24px; color: #8b1e3f; background: white; padding: 8px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>',
    className: 'custom-div-icon',
    iconSize: [40, 40],
    popupAnchor: [0, -20]
  });

  // Add the business marker to the map and open its popup
  L.marker(ubicacionBar, { icon: iconoNegocio })
    .addTo(mapa)
    .bindPopup(`
      <strong>El Rincón del Tapeo</strong><br>
      Calle Mayor 25, Albacete<br>
      🍷 Tapas caseras | 🎵 Música en vivo
    `)
    .openPopup();

  // Variable used to store the current route control
  let controlRuta = null;

  // Add click behavior to the route button
  botonRuta.addEventListener("click", function () {
    // Check whether the browser supports geolocation
    if (!navigator.geolocation) {
      estadoRuta.textContent = "❌ Tu navegador no permite obtener la ubicación.";
      estadoRuta.style.color = "#b00020";
      return;
    }

    // Inform the user that their location is being requested
    estadoRuta.textContent = "📍 Obteniendo tu ubicación...";
    estadoRuta.style.color = "#666";

    // Request the user's current position
    navigator.geolocation.getCurrentPosition(
      function (posicion) {
        // Store the user's coordinates
        const ubicacionCliente = [
          posicion.coords.latitude,
          posicion.coords.longitude
        ];

        // Remove the previous route if one already exists
        if (controlRuta) {
          mapa.removeControl(controlRuta);
        }

        // Create a custom icon for the user's location
        const iconoUsuario = L.divIcon({
          html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: #2c7da0; background: white; padding: 8px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>',
          className: 'custom-div-icon',
          iconSize: [40, 40]
        });

        // Add the user's marker to the map
        L.marker(ubicacionCliente, { icon: iconoUsuario })
          .addTo(mapa)
          .bindPopup("📍 Tu ubicación actual")
          .openPopup();

        // Create and display the route from the user to the business
        controlRuta = L.Routing.control({
          waypoints: [
            L.latLng(ubicacionCliente[0], ubicacionCliente[1]),
            L.latLng(ubicacionBar[0], ubicacionBar[1])
          ],
          routeWhileDragging: false,
          showAlternatives: true,
          addWaypoints: false,
          draggableWaypoints: false,
          fitSelectedRoutes: true,
          show: true,
          language: 'es',
          lineOptions: {
            styles: [{ color: '#8b1e3f', weight: 5, opacity: 0.8 }]
          }
        }).addTo(mapa);

        // Show success message after calculating the route
        estadoRuta.textContent = "✅ Ruta calculada correctamente. Sigue las indicaciones en el mapa.";
        estadoRuta.style.color = "#117a37";
      },
      function (error) {
        // Handle geolocation errors with different messages
        let mensajeError = "";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            mensajeError = "❌ Permiso denegado. Activa la ubicación para calcular la ruta.";
            break;
          case error.POSITION_UNAVAILABLE:
            mensajeError = "❌ No se pudo obtener tu ubicación. Verifica tu conexión GPS.";
            break;
          case error.TIMEOUT:
            mensajeError = "❌ Tiempo de espera agotado. Intenta nuevamente.";
            break;
          default:
            mensajeError = "❌ Error al obtener tu ubicación.";
        }

        // Display the corresponding error message
        estadoRuta.textContent = mensajeError;
        estadoRuta.style.color = "#b00020";
      }
    );
  });
});
