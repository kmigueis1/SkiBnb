
class MarkerManager {

  constructor(map){
    this.map = map;
    this.markers = {};
    this.createMarkerFromHome = this.createMarkerFromHome.bind(this);
  }

  updateMarkers(homes){
    let newHomes = {};
    homes.forEach((home) => {
      newHomes[home.id] = home;
    });

    let markerKeys = Object.keys(this.markers);



    Object.keys(this.markers).forEach((markerId) => {
      if(!newHomes[markerId]){
        this.removeMarker(this.markers[markerId]);
      }
    });
    homes.forEach((home) => {
      if (!markerKeys.includes(home.id)){
        this.createMarkerFromHome(home);
      }
    });

  }

  createMarkerFromHome(home){
    const marker = new google.maps.Marker({
      position: { lat: (home.lat),  lng: (home.lng) },
      icon: {
      path: 'M -25 -12.5 L -25 12.5 L 0 12.5 L 4 17 L 8 12.5 H 18 30 V 0 -12.5 Z',
      scale: 1,
      fillColor: 'white',
      fillOpacity: 1,
      strokeColor: 'lightgrey',
      strokeWeight: 2
     },
     zIndex: home.id,
     map: this.map,
     label: {
      text: `$${home.price}`,
      color: 'black',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontWeight: 'bold'}
    })

    this.markers[home.id] = marker;

  }

  removeMarker(marker){
    if(this.markers[marker.id]){
      this.markers[marker.id].setMap(null);
      delete this.markers[marker.id];
    }
  }
}


export default MarkerManager;
