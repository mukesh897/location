import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactFileReader from 'react-file-reader'
// import { CsvToHtmlTable } from 'react-csv-to-table';
import DataTable from 'react-data-table-component';

import CsvParse from '@vtex/react-csv-parse'

import { HotTable } from '@handsontable/react';

import App from './App.css'



const sampleData = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }, { id: 2, title: 'Conan the Barbarian', year: '1982' } ];

const initTableData = [
      ['Year', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]
    ];

const columns = [
  {
    name: 'id',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'user_id',
    selector: 'user_id',
    sortable: true,
  },
  {
    name: 'vehicle_model_id',
    selector: 'vehicle_model_id',
    sortable: true,
  },
  {
    name: 'package_id',
    selector: 'package_id',
    sortable: true,
  },
  {
    name: 'travel_id',
    selector: 'travel_id',
    sortable: true,
  },
  {
    name: 'from_area_id',
    selector: 'from_area_id',
    sortable: true,
  },
  {
    name: 'to_area_id',
    selector: 'to_area_id',
    sortable: true,
  },
  {
    name: 'from_city_id',
    selector: 'from_city_id',
    sortable: true,
  },
  {
    name: 'to_city_id',
    selector: 'to_city_id',
    sortable: true,
  },
  {
    name: 'from_date',
    selector: 'from_date',
    sortable: true,
  },
  {
    name: 'to_date',
    selector: 'to_date',
    sortable: true,
  },
  {
    name: 'online_booking',
    selector: 'online_booking',
    sortable: true,
  },
  {
    name: 'mobile_site_booking',
    selector: 'mobile_site_booking',
    sortable: true,
  },
  {
    name: 'booking_created',
    selector: 'booking_created',
    sortable: true,
  },
  {
    name: 'from_lat from_long',
    sortable: true,
    cell: row => <button onClick={() => this.props.setLatLong(row.from_lat, row.from_long)}>  {row.from_lat},{row.from_long}</button>,

  },

  {
    name: 'to_lat to_long',
    sortable: true,
    cell: row => <div onClick={ () => this.props.setlatlong(row.to_lat,row.to_long)}><div>{row.to_lat}</div>{row.to_long}</div>,
  },
  {
    name: 'Car_Cancellation',
    selector: 'Car_Cancellation',
    sortable: true,
  },
];

export default class Csv extends Component {


  constructor(props) {
    super(props);

    this.data = [
      ['', 'Tesla', 'Mercedes', 'Toyota', 'Volvo'],
      ['2019', 10, 11, 12, 13],
      ['2020', 20, 11, 14, 13],
      ['2021', 30, 15, 12, 13]
    ];


    this.state = {
      fileText: null,
      tableData: null
    }
  }



  handleFiles = files => {
      var reader = new FileReader();
      reader.onload = e => {
      // Use reader.result
        // alert(reader.result)
        this.setState({
          fileText: reader.result,
        })
        console.log("Reader result is")
        console.log(reader.result)
      }
    reader.readAsText(files[0]);
    // this.setState({
    //   fileText: reader.result,
    // })
    // console.log("this.state")
    // console.log(this.state)
  }

  handleData = data => {
    var dataArray = []
    var currentElementIndex  = ''
    for (currentElementIndex in data) {
      var temp = []
      var key = ''
      //push table headers

      var tableHeaders = []
      for (key in data[0]) {

      }


      for (key in data[currentElementIndex]) {

        temp.push(data[currentElementIndex][key]);
      }
      dataArray.push(temp);
    }
    this.data = dataArray
    console.log("Printing Data Array")
    console.log(dataArray)
    this.setState({
      fileText: data,
      tableData: dataArray,
    })
  }

  handleError = e => {

  }

  onChange = d => {

  }

  // render() {
  //   // const keys = [
  //   //     "id",
  //   //     "user_id",
  //   //     "vehicle_model_id",
  //   //     "package_id",
  //   //     "travel_type_id",
  //   //     "from_area_id",
  //   //     "to_area_id",
  //   //     "from_city_id",
  //   //     "to_city_id",
  //   //     "from_date",
  //   //     "to_date",
  //   //     "online_booking",
  //   //     "mobile_site_booking",
  //   //     "booking_created",
  //   //     "from_lat",
  //   //     "from_long",
  //   //     "to_lat",
  //   //     "to_long",
  //   //     "Car_Cancellation"
  //   //   ]

  // return (
  //   <div>
  //     {/* <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
  //       <button className='btn'>Upload</button>
  //     </ReactFileReader> */}
  //
  //     <CsvParse
  //       keys={keys}
  //       onDataUploaded={this.handleData}
  //       onError={this.handleError}
  //       render={onChange => <input type="file" onChange={onChange} />}
  //     />
  // />
  //
  //     {/* <DataTable
  //       title="Arnold Movies"
  //       columns={columns}
  //       data={this.state.fileText || sampleData}
  //       pagination={true}
  //     /> */}
  //     <HotTable data={this.initTableData} licenseKey='non-commercial-and-evaluation' width="600" height="300" />
  //     <button onClick={() => this.props.setLatLong(100, 100)}>testLatLong</button>
  //   </div>
  //
  // )

      render() {
          const keys = [
              "id",
              "user_id",
              "vehicle_model_id",
              "package_id",
              "travel_type_id",
              "from_area_id",
              "to_area_id",
              "from_city_id",
              "to_city_id",
              "from_date",
              "to_date",
              "online_booking",
              "mobile_site_booking",
              "booking_created",
              "from_lat",
              "from_long",
              "to_lat",
              "to_long",
              "Car_Cancellation"
            ];

      //   hotSettings = {
      //   columns: [
      //     {},
      //     {},
      //     {},
      //     {},
      //
      //     {
      //       renderer: function(instance, td, row, col, prop, value, cellProperties) {
      //         const escaped = Handsontable.helper.stringify(value);
      //         let img = null;
      //
      //         if (escaped.indexOf('http') === 0) {
      //           img = document.createElement('IMG');
      //           img.src = value;
      //
      //           Handsontable.dom.addEvent(img, 'mousedown', function(event) {
      //             event.preventDefault();
      //           });
      //
      //           Handsontable.dom.empty(td);
      //           td.appendChild(img);
      //         }
      //         else {
      //           Handsontable.renderers.TextRenderer.apply(this, arguments);
      //         }
      //
      //         return td;
      //       }
      //     }
      //   ],
      //   colHeaders: true,
      //   rowHeights: 55
      // };

        return (
          <div>
          <CsvParse
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />
          <HotTable data={this.state.fileText} colHeaders={false} rowHeaders={true} height="1000" />
          </div>
        );
      }
}
