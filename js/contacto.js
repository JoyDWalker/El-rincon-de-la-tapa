document.addEventListener("DOMContentLoaded", function () {
  const contenedorMapa = document.getElementById("mapa");
  const botonRuta = document.getElementById("btn-ruta");
  const estadoRuta = document.getElementById("estado-ruta");

  if (!contenedorMapa || !botonRuta || !estadoRuta || typeof L === "undefined") {
    console.error("Elementos del mapa no encontrados o Leaflet no cargado");
    return;
  }

  const ubicacionBar = [38.9945, -1.8581];

  const mapa = L.map("mapa").setView(ubicacionBar, 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  const iconoNegocio = L.divIcon({
    html: '<i class="fa-solid fa-utensils" style="font-size: 24px; color: #8b1e3f; background: white; padding: 8px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>',
    className: 'custom-div-icon',
    iconSize: [40, 40],
    popupAnchor: [0, -20]
  });

  L.marker(ubicacionBar, { icon: iconoNegocio })
    .addTo(mapa)
    .bindPopup(`
      <strong>El Rincón del Tapeo</strong><br>
      Calle Mayor 25, Albacete<br>
      🍷 Tapas caseras | 🎵 Música en vivo
    `)
    .openPopup();

  let controlRuta = null;

  botonRuta.addEventListener("click", function () {
    if (!navigator.geolocation) {
      estadoRuta.textContent = "❌ Tu navegador no permite obtener la ubicación.";
      estadoRuta.style.color = "#b00020";
      return;
    }

    estadoRuta.textContent = "📍 Obteniendo tu ubicación...";
    estadoRuta.style.color = "#666";

    navigator.geolocation.getCurrentPosition(
      function (posicion) {
        const ubicacionCliente = [
          posicion.coords.latitude,
          posicion.coords.longitude
        ];

        if (controlRuta) {
          mapa.removeControl(controlRuta);
        }

        const iconoUsuario = L.divIcon({
          html: '<i class="fa-solid fa-location-dot" style="font-size: 24px; color: #2c7da0; background: white; padding: 8px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></i>',
          className: 'custom-div-icon',
          iconSize: [40, 40]
        });

        L.marker(ubicacionCliente, { icon: iconoUsuario })
          .addTo(mapa)
          .bindPopup("📍 Tu ubicación actual")
          .openPopup();

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

        estadoRuta.textContent = "✅ Ruta calculada correctamente. Sigue las indicaciones en el mapa.";
        estadoRuta.style.color = "#117a37";
      },
      function (error) {
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
        estadoRuta.textContent = mensajeError;
        estadoRuta.style.color = "#b00020";
      }
    );
  });
});
