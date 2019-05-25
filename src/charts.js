import React from 'react';
import { Progress } from 'reactstrap';



export default class Charts extends React.Component{
  render(){
    return(
      <div>
      <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} />
      <div className="text-center">100%</div>
      <Progress value="100" />
      <div className="text-center">Multiple bars</div>
    </div>
    )
  }
}
