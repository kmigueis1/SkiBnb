import React from 'react';
import MarkerManager from '../../util/marker_manager_util'

class HomeIndexMap extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const mapOptions ={
      center: { lat: 40.751457, lng: -73.983474 },
      zoom: 7
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds()
      const northEast = mapBounds.getNorthEast();
      const southWest= mapBounds.getSouthWest();

      const bounds = {
        northEast: { lat: (northEast.lat()), lng: (northEast.lng()) },
        southWest: { lat: (southWest.lat()), lng: (southWest.lng()) }
      }


      this.props.updateBounds(bounds);


      //my test code//////////////
      // let newLatLng = new google.maps.LatLng(37.7749, -122.4194);
      // this.map.setCenter(newLatLng);
      // this.map.panTo(newLatLng);

    })
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.homes);
    if (this.props.newLocation && this.props.newLocation.setLocation){
      let lat = this.props.newLocation.latitude;
      let lng = this.props.newLocation.longitude;
      let newLatLng = new google.maps.LatLng(lat, lng);
      this.map.panTo(newLatLng);
      this.props.resetLocation();
    }
  }

  render(){
    return(
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}

export default HomeIndexMap
