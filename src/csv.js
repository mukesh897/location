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

import Button from 'react-bootstrap/Button'

export default class Csv extends Component {


  constructor(props) {
    super(props);


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

      var pages = []
      var counter = 0;

      for(var i = 0 ; i < data.length ; i++) {
        var thisPage = []
        for (var j = 0 ; j < 20 ; j++) {

          if (typeof(data[counter])=='undefined') {
            counter++;
            continue;
          }
          thisPage.push(data[counter]);
          counter++;
        }
        if (thisPage.length > 0) {
          pages.push(thisPage)
        }
      }

      console.log("pages is")
      console.log(pages)

      console.log("pages length is")
      console.log(pages.length)

      var startPage = this.state.startPage;
      var endPage = this.state.endPage;

      if (pages.length < endPage) {
        endPage = pages.length
      }


      let active = 2;
      let items = [];
      this.pageItems = []


      for (let number = this.state.startPage; number <= endPage; number++) {
        this.pageItems.push(

            <Button variant="light" style={{width:"100%"}}  onClick={() => this.getPageDetails(number)} >{number}</Button>
          // </Pagination.Item>,
        );
      }
      this.pageItems.push(
        <Pagination.Next><Button variant="light" style={{width:"100%"}}  onClick={() => this.generateNextPage()}>Next</Button></Pagination.Next>
      );






      this.generateAnalyticsData(data)

      this.setState({
        fileText: data,
        tableData: dataArray,
        pages: pages,
        currentPage: pages[0],
        endPage: endPage
      })
    }

    generateAnalyticsData = (data) => {
      var analyticsData = {
        bookingMedium: {
          online: 0,
          mobileSite: 0
        },
        travelType: [0,0,0],
        package: [0,0,0,0,0,0,0],
        fromAreaId: {},
        toAreaId: {},
        fromCityId: {},
        toCityId: {}
      }

      for (var i = 0 ; i < data.length ; i++) {
        var trip = data[i]

        // Populate booking medium info for analytics
        if (trip.mobile_site_booking === "1") {
          analyticsData["bookingMedium"]["mobileSite"]++;
        }
        if (trip.online_booking === "1") {
          analyticsData["bookingMedium"]["online"]++;
        }

        // Populate travelType info for analytics
        if (trip.travel_type_id !== 'NULL') {
          analyticsData["travelType"][trip.travel_type_id - 1]++;
        }

        // Populate travelType info for analytics
        if (trip.package_id !== 'NULL') {
          analyticsData["package"][trip.package_id - 1]++;
        }

        // Populate area,city info for analytics

        if (trip.from_area_id !== 'NULL') {
          if (analyticsData["fromAreaId"][trip.from_area_id]) {
            analyticsData["fromAreaId"][trip.from_area_id]++;
          } else {
            analyticsData["fromAreaId"][trip.from_area_id] = 1;
          }
        }

        if (trip.to_city_id !== 'NULL') {
          if (analyticsData["toCityId"][trip.to_city_id]) {
            analyticsData["toCityId"][trip.to_city_id]++;
          } else {
            analyticsData["toCityId"][trip.to_city_id] = 1;
          }
        }

        if (trip.from_city_id !== 'NULL') {
          if (analyticsData["fromCityId"][trip.from_city_id]) {
            analyticsData["fromCityId"][trip.from_city_id]++;
          } else {
            analyticsData["fromCityId"][trip.from_city_id] = 1;
          }
        }

        if (trip.to_area_id !== 'NULL') {
          if (analyticsData["toAreaId"][trip.to_area_id]) {
            analyticsData["toAreaId"][trip.to_area_id]++;
          } else {
            analyticsData["toAreaId"][trip.to_area_id] = 1;
          }
        }

      }

      this.props.setAnalyticsData(analyticsData);

    }

    generateNextPage = () => {
      if (this.state.endPage === this.state.pages.length){
      }
      else {
        var nextStartPage = this.state.startPage + 1;
        var nextEndPage = this.state.endPage + 1;

        this.generatePaginationBar(nextStartPage, nextEndPage)

        this.setState({
          startPage: nextStartPage,
          endPage: nextEndPage,
        });
      }
    }



    handleError = e => {

    }

    onChange = d => {

    }

    generatePaginationBar = (startPage, endPage) => {
      this.pageItems = []

      this.pageItems = []

      this.pageItems.push(
        <Pagination.Prev><Button variant="light" style={{width:"100%"}} >Prev</Button></Pagination.Prev>
      )
      for (let number = startPage; number <= endPage; number++) {
        this.pageItems.push(
          <Pagination.Item>
            <Button variant="light" style={{width:"100%"}}  onClick={() => this.getPageDetails(number)} >{number}</Button>
          </Pagination.Item>,
        );
      }
      this.pageItems.push(
        <Pagination.Next onClick={() => this.generateNextPage()}><Button variant="light" style={{width:"100%"}} >Next</Button></Pagination.Next>
      );
      
    }

    getPageDetails = pageNum => {
      this.setState({
        currentPage: this.state.pages[pageNum - 1],
      })
    }

    showAllToPoints = () => {
      this.props.showAllToPoints(this.state.fileText)
    }

    showAllFromPoints = () => {
      this.props.showAllFromPoints(this.state.fileText)
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
          <CsvParse className="bottomPadded"
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          />
          <Pagination>{this.pageItems}</Pagination>

          <CustomTable
            tableHeaders = {keys}
            data = {this.state.currentPage}
            setLatLong = {this.props.setLatLong}
            showAllToPoints = {this.showAllToPoints}
            showAllFromPoints = {this.showAllFromPoints}
          />
        </div>
      );
    }
  }
