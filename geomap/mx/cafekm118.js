let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 19.8562894, lng:-100.0431511},
    zoom: 19,
  });

  addMarker({lat: 19.8562894, lng:-100.0431511});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}