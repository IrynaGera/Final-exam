import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapStyles from './MapStyle';

class MapContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 50.47883457981365,
      lng: 30.533061459059063 
    },
    zoom: 11
  };

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: this.props.center,
      map,
    });
  }; 

  render() {
    return (
      <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA55kZ8oVmzL4iWc9aWzhQCS25ze2xOJ6U'}}
          defaultCenter={this.props.center}
          options={{styles:MapStyles}}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }; 
}

export default MapContainer;