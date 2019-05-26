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

  generateFeatures = (latitudes, longitudes) => {
    var allFeaturesInvalid = true
    var features = []
    for (var i = 0 ; i < latitudes.length ; i++) {
      var latlong = []
      var lat = latitudes[i]
      var long = longitudes[i]

      console.log("Current latlong")
      console.log(lat + " " + long)

      latlong.push(long)
      latlong.push(lat)

      console.log(latlong)
        if (lat === 'NULL' && long === 'NULL') {
          continue;
        }
        else {
          allFeaturesInvalid = false
        }
      features.push(<Feature coordinates={latlong}/>)
    }
    if (allFeaturesInvalid) {
      var latlong = [0,0]
      features.push(<Feature coordinates={latlong}/>)
    }
    console.log("Printing features")
    console.log(features)
    return features;
  }

  getCentre = (latitudes, longitudes) => {
    var meanLat = 0;
    var meanLong = 0;
    for (var i  = 0 ; i < latitudes.length ; i++) {
      if (latitudes[i] === 'NULL' && longitudes[i] === 'NULL') {
        continue;
      }
      meanLat = meanLat + latitudes[i]
      meanLong = meanLong + longitudes[i]
    }

    meanLat = meanLat/latitudes.length;
    meanLong = meanLong/latitudes.length;

    var centre = []
    centre.push(meanLong);
    centre.push(meanLat);
    return centre;
  }

  render() {
    var latlong = [];
    var latitudes = this.props.latitudes
    var longitudes = this.props.longitudes

    console.log("latitudes on map entry")
    console.log(latitudes)
    console.log("longitudes on map entry")
    console.log(longitudes)

    var features = this.generateFeatures(latitudes, longitudes);
    var centre = this.getCentre(latitudes, longitudes);

      return (
        <div className="left-padded">
          <Map
            style="mapbox://styles/mapbox/streets-v8"
            zoom={zoom}
            center = {centre}
            containerStyle={{
              height: "500px",
              width: "300px"
            }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              {features}
            </Layer>
          </Map>
        </div>
    );
  }
}

export default MapBox;
