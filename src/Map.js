import React from "react";
import L from "leaflet";
// make sure that plugins are imported *after* Leaflet
import "leaflet-contextmenu";
// import plugin's css (if present)
// note, that this is only one of possible ways to load css
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";

const style = {
  width: "50px",
  height: "50px"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      // plugin code is assigned to Leaflet after import
      // so we can immediately use plugins features
      contextmenu: true,
      contextmenuItems: [
        {
          text: "Zoom in",
          callback: this.zoomIn
        },
        {
          text: "Zoom out",
          callback: this.zoomOut
        }
      ],
      center: [45.3, 20.154007],
      zoom: 0,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }

  zoomIn = () => {
    this.map.zoomIn();
  };
  zoomOut = () => {
    this.map.zoomOut();
  };
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
