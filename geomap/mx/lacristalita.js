let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 20.672037, lng:-101.343258},
    zoom: 16,
  });

  addMarker({lat: 20.672037, lng:-101.343258});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}