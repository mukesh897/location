import React from "react";
import { render } from "react-dom";
import MapBox from "./Map";
import Csv from "./csv";
import Grid from '@material-ui/core/Grid';
// const { Checkbox } from 'react-md';
// import DataTable from 'react-data-table-component';


// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      latitude: 12.9716,
      longitude: 77.5946
    }
  }
  setlatlong = (lat,long) => {
    console.log("Setting lat long")
    this.setState({
      latitude: lat ,
      longitude: long
    })
    console.log('printing state after update')
    console.log(this.state);
  }

  render() {
    return(
    <Grid container>
      <Grid item xs={6}>
        <Csv setLatLong={this.setlatlong}/>
      </Grid>
      <Grid item xs={6}>
        <MapBox />

      </Grid>
    </Grid>
  )
  }
}

render(<App />, document.getElementById("root"));
