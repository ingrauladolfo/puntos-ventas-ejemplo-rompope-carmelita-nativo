let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 37.3033333, lng:-120.4988554},
    zoom: 7,
  });

  addMarker({lat: 37.3033333, lng:-120.4988554});
  addMarker({lat: 37.5191667, lng:-120.8907998});
  addMarker({lat: 37.7025146, lng: -121.0689382});
  addMarker({lat: 37.0083692, lng: -121.5587881});
  addMarker({lat: 36.7035217, lng: -121.67134});
  addMarker({lat: 37.3098922, lng: -121.852105});
  addMarker({lat: 38.0087013, lng: -121.8378439});
  addMarker({lat: 37.9584129, lng: -122.0354117});
  addMarker({lat: 37.478857, lng: -122.218773});
  addMarker({lat: 37.7206153, lng: -122.1841116});
  addMarker({lat: 37.8988594, lng: -122.3222757});
  addMarker({lat: 37.3569434, lng: -121.9415157});
  addMarker({lat: 37.7705154, lng: -122.4130163});
  addMarker({lat: 37.615537, lng: -122.0918725});
  addMarker({lat: 32.8115846, lng: -115.5753392});
  addMarker({lat: 32.7126509, lng: -117.1181338});
  addMarker({lat: 32.6086487, lng: -117.0859879});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}