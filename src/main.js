function iniciarMap() {
    const coord = { lat:2.436537, lng: -76.614439}; // Coordenadas de la ubicación
  
    const map = new google.maps.Map(document.getElementById("map"), {
      center: coord,
      zoom: 10, // Nivel de zoom del mapa
    });
  
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
       // Título del marcador
    });
  }
  