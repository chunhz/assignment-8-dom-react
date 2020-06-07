import React, { Component } from "react";


class TableRow extends Component{
  constructor(props){
    super(props);
    this.state = {
      rowArr: [],
    }
  }

  AddRow = () =>{
    // let rowArr = [];
    this.state.rowArr.forEach((cell) => {
      this.props.push(cell)
      console.log(this.state.rowArr)
    })
  }

render(){
  return(
    <div>
      <tr>{this.AddRow}</tr>
    </div>
  )
    
  
}
}


export default TableRow;