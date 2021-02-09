let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 19.6711247, lng: -101.2114691},
    zoom: 6,
  });

  addMarker({lat: 21.916293, lng: -102.2886472});
  addMarker({lat: 20.5452967, lng: -100.8207765});
  addMarker({lat: 18.9344362, lng: -99.233999});
  addMarker({lat: 20.6790649, lng: -103.4288335});
  addMarker({lat: 21.0981285, lng: -101.6345773});
  addMarker({lat: 21.1571273, lng: -101.7060027});
  addMarker({lat: 19.6711247, lng: -101.2114691});
  addMarker({lat: 19.0328324, lng: -98.2389036});
  addMarker({lat: 20.6143944, lng: -100.3941552});
  addMarker({lat: 22.1385859, lng: -101.0065688});
  addMarker({lat: 19.2574712, lng: -99.6172732});
  addMarker({lat: 20.5782459, lng: -103.4498666});

  function addMarker(coords){
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
   });
  }
}