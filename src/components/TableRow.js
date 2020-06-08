import React from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  let columns = [];

  // Handles the amount of columns for the grid
  for (let i = 0; i < props.totalCols; i++) {
    columns.push(
      <TableCell key={i} changeColor={props.changeColor}/>
    );
  }
console.log(columns)
  return <tr>{columns}</tr>;
};

export default TableRow;