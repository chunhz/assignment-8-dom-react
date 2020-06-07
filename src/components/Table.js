import React, { Component } from "react";
import TableRow from "./TableRow.js";
class Table extends Component{
  constructor(props){

    super(props);
    this.state = {
      totalRow: 0,
      totalCol: 0,
      color: "Red",
      table: [],
    }
  }
  addRow = () => {
    let newCell = new Array(this.state.totalCol);
    this.setState({
      
      totalRow: this.state.totalRow+1,
    })
  }

  addCol = () => {
    if(this.state.totalRow >= 0) {

    } 
  }

  removeRow = () => {

  }

  removeCol = () => {

  }
  
  selectColor = (event) => {

  }
  render() {
    
    return (
      <div>
      <TableRow />
    <button onclick = {this.addRow}>Add Row</button>
    <button onclick = {this.addCol}>Add Column</button> 
    <button onclick = {this.removeCol}>Remove Row</button> 
    <button onclick = {this.removeRow}>Remove Column</button> 
    <select onchange = {this.selectColor} id="selectColor"> 
    <option value = "red">Red</option>
    <option value = "green">Green</option>
    <option value = "blue">Blue</option>
    </select>
    <button onclick = "fillAllUncolorCells()">Fill All Uncolored Cells</button> 
    <button onclick = "fillAllCells()">Fill All Current Cells</button> 
    <button onclick = "restoreAllCells()">Clear/Restore All Cells</button> 

    </div>  
    )
  }
 
}

export default Table;