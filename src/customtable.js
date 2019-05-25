import React from 'react';
import Table from 'react-bootstrap/Table'
import App from './App.css'


export default class CustomTable extends React.Component{

  generateTableHeaders = () => {
    return (
      <tr>
        <th>ID</th>
        <th>User ID</th>
        <th><button onClick={() => this.props.showAllFromPoints()}>From</button></th>
        <th><button onClick={() => this.props.showAllToPoints()}>To</button></th>
      </tr>
    )
  }

  createdata=(row)=> {
    return (



        <tr>
          <td>{row.id}</td>
          <td>{row.user_id}</td>
          <td><button onClick={() => this.props.setLatLong(row.from_lat, row.from_long)}>{row.from_lat}<br></br>{row.from_long}</button></td>
          <td><button onClick={() => this.props.setLatLong(row.to_lat, row.to_long)}>{row.to_lat}<br></br>{row.to_long}</button></td>

        </tr>

    )
  }
  render(){

    const rows = this.props.data;
    const listItems = rows.map(this.createdata)

    const tableHeaders = (this.generateTableHeaders())



    return(
      <div>
         <Table className="striped bordered hover" variant="dark">
           <thead>{tableHeaders}</thead>
           <tbody>
             {listItems}
           </tbody>
         </Table>
       </div>
    )
  }
}
