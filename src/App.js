import React, { Component } from 'react';
import Table from './components/Table.js';
import './App.css';

class App extends Component{
  constructor(props){

    super(props);
    this.state = {
      totalRows: 1,
      totalCols: 1,
      Color: "red",
    };
  }
  handleSelectColor = (event) => {
    this.setState({
      Color: event.target.value,
    });
  };
  changeColor = (event) => {
    event.target.style.backgroundColor = this.state.Color;
  };
  addRow = () => {
    console.log(this.state.totalRows)
    this.setState((state) => ({
      totalRows: state. totalRows + 1,
    }));
  }

  addCol = () => {
    this.setState((state) => ({
      totalCols: state.totalCols + 1,
    }));
    
  }

  removeRow = () => {
    this.setState((state) => ({
      totalRows: state.totalRows - 1,
    }));
  }

  removeCol = () => {
    this.setState((state) => ({
      totalCols: state.totalCols - 1,
    }));
  }
  render() {
    return (
      <div>
        <div>

    <button onClick = {this.addRow}>Add Row</button>
    <button onClick = {this.addCol}>Add Column</button> 
    <button onClick = {this.removeCol}>Remove Row</button> 
    <button onClick = {this.removeRow}>Remove Column</button> 
    <select value={this.state.Color} onChange = {this.handleSelectColor} id="selectColor"> 
    <option value = "red">Red</option>
    <option value = "green">Green</option>
    <option value = "blue">Blue</option>
    </select>
    </div>  
       <Table 
       changeColor={this.changeColor}
       totalRows={this.state.totalRows}
       totalCols={this.state.totalCols}
       
       />
    </div>

    );
  }
 
}
  

export default App;