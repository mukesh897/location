import React from 'react';
import { Progress } from 'reactstrap';
import CanvasJSReact from './canvasjs.react'



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
        <div className="text-center">Packages</div>

        <Progress multi>
      <Progress bar value={perc1}>4hrs & 40kms</Progress>
      <Progress bar color="success" value={perc2}>8hrs & 80kms</Progress>
      <Progress bar color="info" value={perc3}>6hrs & 60kms</Progress>
      <Progress bar color="warning" value={perc4}>10hrs & 100kms</Progress>
      <Progress bar color="danger" value={perc5}>5hrs & 50kms</Progress>
      <Progress bar color="danger" value={perc6}>3hrs & 30kms</Progress>
      <Progress bar color="danger" value={perc7}>12hrs & 120kms</Progress>
      </Progress>

      <CanvasJSChart options = {options}/>
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

    return(
      <div>
        <div className="text-center">Travel Type</div>
        <Progress multi>
      <Progress bar value={travelPerc1}>long distance</Progress>
      <Progress bar color="success" value={travelPerc2}>point to point</Progress>
      <Progress bar color="info" value={travelPerc3}>hourly rental</Progress>
    </Progress>
      </div>
    )



  }

  generateBookingMediumVis = analyticsData => {
    var mobileSiteBookings = analyticsData["bookingMedium"]["mobileSite"]
    var onlineBookings = analyticsData["bookingMedium"]["online"]
    var totalBookings = mobileSiteBookings + onlineBookings
    var mobilePerc = Math.round((mobileSiteBookings/totalBookings) * 100)
    var onlinePerc = Math.round((onlineBookings/totalBookings) * 100)

    return (
      <div>

        <div className="text-center">Mobile Bookings: {mobilePerc}%</div>
        <Progress value={mobilePerc} />
        <div className="text-center">Online Bookings: {onlinePerc}%</div>
        <Progress value={onlinePerc} />
      </div>
    )
  }

  render(){
    // var CanvasJSReact = require('./canvasjs.react');




    var analyticsData = this.props.analyticsData
    return(
      <div>
      <div>
        {this.generateBookingMediumVis(analyticsData)}
      </div>
      <div>
        {this.generatePackageVis(analyticsData)}
      </div>
      <div>
        {this.generateTravelTypeVis(analyticsData)}
      </div>

    </div>
    )
  }
}
