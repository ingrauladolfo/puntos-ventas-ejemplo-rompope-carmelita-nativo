let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 20.3806639, lng:-101.869064},
    zoom: 8,
  });

  addMarker({lat: 20.3806639, lng:-101.869064});
  addMarker({lat: 20.7341322, lng:-103.578063});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}