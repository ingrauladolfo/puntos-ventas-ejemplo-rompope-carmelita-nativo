let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 37.488519, lng: -122.2376175},
    zoom: 10,
  });

  addMarker({lat: 37.488519, lng: -122.2376175});
  addMarker({lat: 37.4674964, lng: -122.2100056});
  addMarker({lat: 37.4706026, lng: -122.2054976});
  addMarker({lat: 37.6323173, lng: -122.0785652});
  addMarker({lat: 37.6626107, lng: -122.078471});
  addMarker({lat: 37.390196, lng: -122.0163105});
  addMarker({lat: 37.3671553, lng: -121.8517332});
  addMarker({lat: 37.2957421, lng: -121.8541451});
  addMarker({lat: 37.2493257, lng: -121.8472557});
  addMarker({lat: 37.5712275, lng: -122.3125109});

  function addMarker(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: map
   });
  }
}