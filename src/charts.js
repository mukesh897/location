import React from 'react';
import { Progress } from 'reactstrap';
import CanvasJSReact from './canvasjs.react'

import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '@material-ui/core/Card';



export default class Charts extends React.Component{



  generatePackageVis = analyticsData => {
    var package1 = analyticsData["package"][0]
    var package2 = analyticsData["package"][1]
    var package3 = analyticsData["package"][2]
    var package4 = analyticsData["package"][3]
    var package5 = analyticsData["package"][4]
    var package6 = analyticsData["package"][5]
    var package7 = analyticsData["package"][6]
    var packageTotal = package1 + package2 + package3 + package4 + package5 + package6 + package7
    var perc1 = Math.round((package1/packageTotal) * 100)
    var perc2 = Math.round((package2/packageTotal) * 100)
    var perc3 = Math.round((package3/packageTotal) * 100)
    var perc4 = Math.round((package4/packageTotal) * 100)
    var perc5 = Math.round((package5/packageTotal) * 100)
    var perc6 = Math.round((package6/packageTotal) * 100)
    var perc7 = Math.round((package7/packageTotal) * 100)

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Percentage of trips by different travel packages"
      },
      data: [{
                type: "pie",
                dataPoints: [
                    { label: "4hrs & 40kms",  y: perc1  },
                    { label: "8hrs & 80kms", y: perc2  },
                    { label: "6hrs & 60kms", y: perc3  },
                    { label: "10hrs & 100kms",  y: perc4  },
                    { label: "5hrs & 50kms",  y: perc5  },
                    { label: "3hrs & 30kms",  y: perc6  },
                    { label: "12hrs & 120kms",  y: perc7  },
                ]
       }]
   }



    return (
      <div>
        <Card>
          <CanvasJSChart options = {options}/>
        </Card>
      </div>
    )
  }

  generateTravelTypeVis = analyticsData => {
    var travelType1 = analyticsData["travelType"][0]
    var travelType2 = analyticsData["travelType"][1]
    var travelType3 = analyticsData["travelType"][2]
    var travelTypeTotal = travelType1 + travelType2 + travelType3
    // console.log("Travel percentages are " + travelType1 + " " + travelType2 + " " + travelPerc3 + " total " + travelTypeTotal);
    var travelPerc1 = Math.round ((travelType1/travelTypeTotal) * 100)
    var travelPerc2 = Math.round ((travelType2/travelTypeTotal) * 100)
    var travelPerc3 = Math.round ((travelType3/travelTypeTotal) * 100)

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Percentage of trips by different travel preferences"
      },
      data: [{
                type: "column",
                dataPoints: [
                    { label: "long distance",  y: travelPerc1  },
                    { label: "point to point", y: travelPerc2  },
                    { label: "hourly rental", y: travelPerc3  },
                ]
       }]
   }

    return(
      <div>
        <Card>
          <CanvasJSChart options = {options}/>\
        </Card>
      </div>
    )



  }

  generateFromAreaVis = analyticsData => {
    var fromAreaIdsData = analyticsData["fromAreaId"];
    var fromAreaIdsDataPoints = []
    for (var key in fromAreaIdsData) {
      fromAreaIdsDataPoints.push({
        label: key,
        y: fromAreaIdsData[key],
      })
    }

    fromAreaIdsDataPoints.sort(function(a,b) {
      return b.y - a.y;
    })

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Number of trips starting from each area id"
      },
      data: [{
                type: "pyramid",
                dataPoints: fromAreaIdsDataPoints
       }]
   }

   return (
     <div>
       <Card>
         <CanvasJSChart options = {options}/>
       </Card>
     </div>
   )
  }

  generateToCityVis = analyticsData => {
    var toCityIdsData = analyticsData["toCityId"];
    var toCityIdsDataPoints = []
    for (var key in toCityIdsData) {
      toCityIdsDataPoints.push({
        label: key,
        y: toCityIdsData[key],
      })
    }
    toCityIdsDataPoints.sort(function(a,b) {
      return b.y - a.y;
    })


    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Number of trips ending to each city id"
      },
      data: [{
                type: "pyramid",
                dataPoints: toCityIdsDataPoints
       }]
   }

   return (
     <div>
       <Card>
         <CanvasJSChart options = {options}/>
       </Card>
     </div>
   )
  }

  generateToAreaVis = analyticsData => {
    var toAreaIdsData = analyticsData["toAreaId"];
    var toAreaIdsDataPoints = []
    for (var key in toAreaIdsData) {
      toAreaIdsDataPoints.push({
        label: key,
        y: toAreaIdsData[key],
      })
    }
    toAreaIdsDataPoints.sort(function(a,b) {
      return b.y - a.y;
    })


    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Number of trips ending to each area id"
      },
      data: [{
                type: "pyramid",
                dataPoints: toAreaIdsDataPoints
       }]
   }

   return (
     <div>
       <Card>
         <CanvasJSChart options = {options}/>
       </Card>
     </div>
   )
  }

  generateFromCityVis = analyticsData => {
    var fromCityIdsData = analyticsData["fromCityId"];
    var fromCityIdsDataPoints = []
    for (var key in fromCityIdsData) {
      fromCityIdsDataPoints.push({
        label: key,
        y: fromCityIdsData[key],
      })
    }
    fromCityIdsDataPoints.sort(function(a,b) {
      return b.y - a.y;
    })


    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Number of trips starting from each city id"
      },
      data: [{
                type: "doughnut",
                dataPoints: fromCityIdsDataPoints
       }]
   }

   return (
     <div>
       <Card>
         <CanvasJSChart options = {options}/>
       </Card>
     </div>
   )
  }

  generateBookingMediumVis = analyticsData => {
    var mobileSiteBookings = analyticsData["bookingMedium"]["mobileSite"]
    var onlineBookings = analyticsData["bookingMedium"]["online"]
    var totalBookings = mobileSiteBookings + onlineBookings
    var mobilePerc = Math.round((mobileSiteBookings/totalBookings) * 100)
    var onlinePerc = Math.round((onlineBookings/totalBookings) * 100)

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
      title: {
        text: "Percentage of trips by booking medium"
      },
      data: [{
                type: "bar",
                dataPoints: [
                    { label: "MobileSite bookings",  y: mobilePerc  },
                    { label: "Online bookings", y: onlinePerc  },
                ]
       }]
   }

    return (
      <div>
        <Card>
          <CanvasJSChart options = {options}/>
        </Card>
      </div>
    )
  }

  render(){
    // var CanvasJSReact = require('./canvasjs.react');




    var analyticsData = this.props.analyticsData
    console.log("Printing analytics data")
    console.log(analyticsData)
    return(
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              {this.generateBookingMediumVis(analyticsData)}
            </div>
            <div>
              {this.generateTravelTypeVis(analyticsData)}
            </div>
            <div>
              {this.generateToCityVis(analyticsData)}
            </div>
            <div>
              {this.generateToAreaVis(analyticsData)}
            </div>

          </Grid>
          <Grid item xs={6}>
            <div>
              {this.generatePackageVis(analyticsData)}
            </div>
            <div>
              {this.generateFromAreaVis(analyticsData)}
            </div>
            <div>
              {this.generateFromCityVis(analyticsData)}
            </div>
          </Grid>
        </Grid>
    </div>
    )
  }
}
