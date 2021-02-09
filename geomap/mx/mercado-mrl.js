let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 19.7033668, lng:-101.1959964},
    zoom: 16,
  });

  addMarker({lat: 19.7033668, lng:-101.1959964});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}