import React from "react";
import { render } from "react-dom";
import Map from "./Map";
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  render() {
    return(
    <Grid container>
      <Grid item xs={6}>
        here1
      </Grid>
      <Grid item xs={6}>
        <Map />

      </Grid>
    </Grid>
  )
  }
}

render(<App />, document.getElementById("root"));
