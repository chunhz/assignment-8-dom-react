import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  let rows = [];
  for (let i = 0; i < props.totalRows; i++) {
    rows.push(
      <TableRow key={i} changeColor={props.changeColor} totalCols={props.totalCols}/>
    );
  }
  return (
    <table className="table">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;