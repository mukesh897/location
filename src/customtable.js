import React from 'react';


export default class CustomTable extends React.Component{

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



    return(
       <ul>{listItems}</ul>
    )
  }
}
