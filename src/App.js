import React, { Component } from 'react';
import Table from './components/Table';
import TableRow from './components/TableRow';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      selected: "red"
    }
  }
  render() {
    return (
      <div>
        {/* {/* <TableRow />  */}
        
      <Table />
  
    </div>
    )
  }
 
}
  

export default App;