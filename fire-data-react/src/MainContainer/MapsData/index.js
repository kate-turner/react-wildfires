import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {

    let fireMarkers = this.props.firesData.map((fire, index) => (
      <Marker key={index}
        title={fire.report.name}
        name={fire.place.name}
        position={{
          lat: fire.loc.lat,
          lng: fire.loc.long
        }}
      />
    )
  )

    return (
      <div className="mapContainer">
        <Map google={this.props.google}
          initialCenter={{
            lat: 39.73,
            lng: -104.99
        }}
        style={{width: '50%', height: '50%'}}
        zoom={4}
        onClick={this.onMapClicked}>

        {fireMarkers}

        </Map>
      </div>
    );

  }

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')

})(MapContainer)