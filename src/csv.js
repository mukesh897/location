import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactFileReader from 'react-file-reader'
// import { CsvToHtmlTable } from 'react-csv-to-table';
import DataTable from 'react-data-table-component';
import CustomTable from './customtable';

import CsvParse from '@vtex/react-csv-parse'

import { HotTable } from '@handsontable/react';

import App from './App.css'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'



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
    cell: row =>
    <div>
      <button id={row.from_lat} onClick={() => this.props.setLatLong(row.from_lat, row.from_long)}>Click me</button>
      <button onClick={() => this.props.setLatLong(row.from_lat, row.from_long)}>
        {row.from_lat},{row.from_long}
      </button>
    </div>,

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
      pageNumbers: [1,2,3],
      pages: [[],[],[]],
      currentPage: [],
      startPage: 1,
      endPage: 5,
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

      let active = 2;
      let items = [];
      this.pageItems = []
      this.pageItems.push(
        <Pagination.First><button>First</button></Pagination.First>

      )
      this.pageItems.push(
        <Pagination.Prev><button>Prev</button></Pagination.Prev>
      )
      for (let number = this.state.startPage; number <= this.state.endPage; number++) {
        this.pageItems.push(

            <button onClick={() => this.getPageDetails(number)} >{number}</button>
          // </Pagination.Item>,
        );
      }
      this.pageItems.push(
        <Pagination.Next><button onClick={() => this.generateNextPage()}>Next</button></Pagination.Next>
      );
      this.pageItems.push(
        <Pagination.Last><button>Last</button></Pagination.Last>
      );

      var counter = 0;

      var pages = []

      for(var i = 0 ; i < data.length ; i++) {
        var thisPage = []
        for (var j = 0 ; j < 20 ; j++) {
          thisPage.push(data[counter]);
          counter++;
        }
        pages.push(thisPage)
      }

      console.log("First page")
      console.log(pages[0])

      console.log("Second page")
      console.log(pages[1])

      this.setState({
        fileText: data,
        tableData: dataArray,
        pages: pages,
      })
    }

    generateNextPage = () => {
      var nextStartPage = this.state.startPage + 1;
      var nextEndPage = this.state.endPage + 1;

      this.generatePaginationBar(nextStartPage, nextEndPage)

      this.setState({
        startPage: nextStartPage,
        endPage: nextEndPage,
      });
    }

    handleError = e => {

    }

    onChange = d => {

    }

    generatePaginationBar = (startPage, endPage) => {
      this.pageItems = []

      this.pageItems = []
      this.pageItems.push(
        <Pagination.First><button>First</button></Pagination.First>

      )
      this.pageItems.push(
        <Pagination.Prev><button>Prev</button></Pagination.Prev>
      )
      for (let number = startPage; number <= endPage; number++) {
        this.pageItems.push(
          <Pagination.Item>
            <button onClick={() => this.getPageDetails(number)} >{number}</button>
          </Pagination.Item>,
        );
      }
      this.pageItems.push(
        <Pagination.Next onClick={() => this.generateNextPage()}><button>Next</button></Pagination.Next>
      );
      this.pageItems.push(
        <Pagination.Last><button>Last</button></Pagination.Last>
      );
    }

    getPageDetails = pageNum => {
      console.log("Getting page details for " + pageNum)
      this.setState({
        currentPage: this.state.pages[pageNum],
      })
    }

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

      return (
        <div>
          <CsvParse
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleEr00ror}
            render={onChange => <input type="file" onChange={onChange} />}
          />
          <Pagination>{this.pageItems}</Pagination>

          <CustomTable
            data = {this.state.currentPage || sampleData}
            setLatLong = {this.props.setLatLong}
          />

          {/* <DataTable
            title="Arnold Movies"
            columns={columns}
            data={this.state.currentPage || sampleData}
            pagination={true}
          /> */}




          {/* <HotTable data={this.state.fileText} colHeaders={false} rowHeaders={true} height="1000" /> */}
        </div>
      );
    }
  }
