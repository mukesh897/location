import React from "react";
import { render } from "react-dom";
import MapBox from "./Map";
import Charts from "./charts";

import Csv from "./csv";
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


// const { Checkbox } from 'react-md';
// import DataTable from 'react-data-table-component';


// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      latitudes: [12.9716, 12.9716],
      longitudes: [77.5946, 77.5946],
      analyticsData: {
        bookingMedium: {
          online: 0,
          mobileSite: 0
        },
        travelType: [0,0,0],
        package: [0,0,0,0,0,0,0],
      },
    }
  }

  setAnalyticsData = (data) => {
    this.setState({
      analyticsData: data
    })
  }

  setLatLong = (lat,long) => {
    console.log("Setting lat long")
    console.log(lat + " " + long);
    var latitudes = [];
    var longitudes = [];
    latitudes.push(lat)
    longitudes.push(long)
    this.setState({
      latitudes: latitudes,
      longitudes: longitudes
    })
    console.log('printing state after update')
    console.log(this.state);
  }

  showAllFromPoints = (data) => {
    var latitudes = []
    var longitudes = []
    for (var i = 0 ; i < data.length ; i++) {
      var trip = data[i]
      latitudes.push(trip.from_lat)
      longitudes.push(trip.from_long)
    }
    this.setState({
      latitudes: latitudes,
      longitudes: longitudes
    })
  }

  showAllToPoints = (data) => {
    var latitudes = []
    var longitudes = []
    for (var i = 0 ; i < data.length ; i++) {
      var trip = data[i]
      latitudes.push(trip.to_lat)
      longitudes.push(trip.to_long)
    }
    this.setState({
      latitudes: latitudes,
      longitudes: longitudes
    })
  }

  render() {
    return(

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Grid container spacing={2}>
            <Grid item xs={6} className="right-padded top-padded">
              <Csv setLatLong={this.setLatLong}
              setAnalyticsData={this.setAnalyticsData}
              showAllToPoints={this.showAllToPoints}
              showAllFromPoints={this.showAllFromPoints}
              />
            </Grid>
            <Grid item xs={6} className="left-padded">
              <MapBox
                latitudes={this.state.latitudes}
                longitudes={this.state.longitudes}
               />
             </Grid>
           </Grid>
        </Tab>
        <Tab eventKey="contact" title="Maps">
          <Grid container align='center'>
            <Grid item xs={12}>
              <Charts
              analyticsData={this.state.analyticsData}/>
            </Grid>
        </Grid>
        </Tab>
      </Tabs>
    //
    // <Grid container spacing={2}>
    //   <Grid item xs={4} className="right-padded">
    //     <Csv setLatLong={this.setLatLong}
    //     setAnalyticsData={this.setAnalyticsData}
    //     showAllToPoints={this.showAllToPoints}
    //     showAllFromPoints={this.showAllFromPoints}
    //     />
    //   </Grid>
    //   <Grid item xs={4} className="left-padded">
    //     <MapBox
    //       lat={this.state.latitude}
    //       long={this.state.longitude}
    //      />
    //    </Grid>
    //   <Grid item xs={4}>
    //     <Charts
    //     analyticsData={this.state.analyticsData}/>
    //   </Grid>
    // </Grid>
  )
  }
}

render(<App />, document.getElementById("root"));
