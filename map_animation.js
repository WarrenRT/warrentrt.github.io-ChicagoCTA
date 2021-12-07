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
      [-87.7748733333333, 41.885206667],
      [-87.7748566666667, 41.8838633333333],
      [-87.77493667, 41.886908333],
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