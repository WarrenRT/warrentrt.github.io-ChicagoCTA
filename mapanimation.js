mapboxgl.accessToken = "pk.eyJ1Ijoid2FycmVudDIwMTUiLCJhIjoiY2t3dXQ3N3B2MXR2ZjJwbW55ZWU0OTRhMSJ9.T6CO_IKA5w-1j8ZWM_n6OA";

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-87.623206666667, 41.840606666667],
    zoom: 11
});

var marker = new mapboxgl.Marker()
    .setLngLat([-87.623206666667, 41.840606666667])
    .addTo(map);

    const busStops = [
        [-87.623206666667, 41.840606666667],  
        [-87.623969999999, 41.861706666665],
        [-87.63011177, 41.85767207],
      [-87.72091557,41.8953398],
      [-87.63599, 41.744308],
      [-87.63184, 41.848993],
    ];

var counter =  0;
function move(){
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
