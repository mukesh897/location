import React from 'react';
import Table from 'react-bootstrap/Table'
import App from './App.css'
import Button from 'react-bootstrap/Button'




export default class CustomTable extends React.Component{

  generateTableHeaders = () => {
    return (
      <tr>
        <th>ID</th>
        <th>User ID</th>
        <th><Button variant="outline-secondary"  style={{width:"100%"}} onClick={() => this.props.showAllFromPoints()}>From (Lat, Long) </Button></th>
        <th><Button variant="outline-secondary" style={{width:"100%"}} onClick={() => this.props.showAllToPoints()}>To  (Lat, Long) </Button></th>
      </tr>
    )
  }

  createdata=(row)=> {
    console.log("Row receieved is")
    console.log(row)
    return (
        <tr>
          <td>{row.id}</td>
          <td>{row.user_id}</td>
          <td><Button variant="secondary" style={{width:"100%"}} onClick={() => this.props.setLatLong(row.from_lat, row.from_long)}>{row.from_lat},{row.from_long}</Button></td>
          <td><Button variant="secondary" style={{width:"100%"}} onClick={() => this.props.setLatLong(row.to_lat, row.to_long)}>{row.to_lat},{row.to_long}</Button></td>

        </tr>

    )
  }
  render(){

    const rows = this.props.data;
    const listItems = rows.map(this.createdata)

    const tableHeaders = (this.generateTableHeaders())



    return(
      <div>
         <Table style={{width: "100%"}} striped bordered hover size="sm" variant="dark">
           <thead>{tableHeaders}</thead>
           <tbody>
             {listItems}
           </tbody>
         </Table>
       </div>
    )
  }
}
