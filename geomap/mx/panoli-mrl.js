let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 19.690511, lng:-101.1799483},
    zoom: 16,
  });

  addMarker({lat: 19.690511, lng:-101.1799483});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}