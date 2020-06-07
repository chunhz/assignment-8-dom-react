import React, { Component } from 'react';
import Table from './components/Table.js';
import TableRow from './components/TableRow.js';
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <TableRow />
       <Table />
    </div>
    )
  }
 
}
  

export default App;