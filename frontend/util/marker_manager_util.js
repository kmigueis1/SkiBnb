
class MarkerManager {

  constructor(map){
    this.map = map;
    this.markers = {};
    this.createMarkerFromHome = this.createMarkerFromHome.bind(this);
  }

  updateMarkers(homes){
    let markerKeys = Object.keys(this.markers);
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
      title: home.price
    })
    this.markers[home.id] = marker;
    return marker;
  }
}


export default MarkerManager;
