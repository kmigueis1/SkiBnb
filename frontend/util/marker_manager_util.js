
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
      position: { lat: home.latitude,  lng: home.longitude },
      map: this.map,
      title: String(home.price)
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
