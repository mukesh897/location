import React, {Component} from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import styled from 'styled-components';

const zoom = [8];

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibXVrZXNoODk3IiwiYSI6ImNqdzB0czNyeTBkb2Y0YXBzaGtybWN1OXMifQ.FzFYZ1t6Fe0TV-Csb1bDlA"
});

const Mark = styled.div`
  background-color: #e74c3c;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 4px solid #eaa29b;
`;

class MapBox extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 15
    },
    latlong: [0,0]
  };

  render() {
    var latlong = [];
    var lat = this.props.lat
    var long = this.props.long
    latlong.push(this.props.long)
    latlong.push(this.props.lat)
      if (lat === 'NULL' && long === 'NULL') {
        latlong = []
        latlong.push(0)
        latlong.push(0)
      }

      return (
        <div className="left-padded">
          <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={zoom}
            center = {latlong}
            containerStyle={{
              height: "500px",
              width: "300px"
            }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={latlong}/>
            </Layer>
          </Map>
        </div>
    );
  }
}

export default MapBox;
