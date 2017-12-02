import React from 'react';
import MarkerManager from '../../util/marker_manager_util'

class HomeIndexMap extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    google.maps.event.clearInstanceListeners(this.map);
  }

  componentDidMount(){

    const mapOptions ={
      center: { lat: 40.751457, lng: -73.983474 },
      zoom: 7
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);

    this.idleCallback = () => {
      const mapBounds = this.map.getBounds()
      const northEast = mapBounds.getNorthEast();
      const southWest= mapBounds.getSouthWest();

      const bounds = {
        northEast: { lat: (northEast.lat()), lng: (northEast.lng()) },
        southWest: { lat: (southWest.lat()), lng: (southWest.lng()) }
      }
      this.props.updateBounds(bounds);

    }

    google.maps.event.addListener(this.map, 'idle', this.idleCallback)
  }

  componentDidUpdate(){

    this.MarkerManager.updateMarkers(this.props.homes);
    if (this.props.newLocation && this.props.newLocation.setLocation){
      const lat = this.props.newLocation.lat;
      const lng = this.props.newLocation.lng;
      const northEast = this.props.newLocation.northeast;
      const southWest = this.props.newLocation.southwest;
      const newLatLng = new google.maps.LatLng(lat, lng);

      const northEastBound = new google.maps.LatLng(northEast[0], northEast[1]);
      const southWestBound = new google.maps.LatLng(southWest[0], southWest[1]);
      const newBounds = new google.maps.LatLngBounds(southWestBound, northEastBound);

      this.map.setZoom(16);
      this.map.fitBounds(newBounds);
      this.map.setZoom(this.map.getZoom() + 1);
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
