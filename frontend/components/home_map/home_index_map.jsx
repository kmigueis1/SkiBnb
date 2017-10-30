import React from 'react';
import MarkerManager from '../../util/marker_manager_util'

class HomeIndexMap extends React.Component {

  componentDidMount(){
    const mapOptions ={
      center: { lat: 40.751457, lng: -73.983474 },
      zoom: 9
    }
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.homes);
    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds()
      const bounds = {
        northEast: { lat: mapBounds.f.f, lng: mapBounds.b.f },
        southWest: { lat: mapBounds.f.b, lng: mapBounds.b.b }
      }
      this.props.updateBounds(bounds);
    })
  }

  componentWillReceiveProps(){
    this.MarkerManager.updateMarkers(this.props.homes);
  }
  render(){
    return(
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}

export default HomeIndexMap
