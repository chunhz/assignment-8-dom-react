import React, { Component } from "react";

function TableCell(props){
 
    return( 
      <td style= {{
        width: "30px", 
        height: "30px", 
        backgroundColor: "Blue",
      }} 
        
        onMouseDown={props.mouseDown} 
        onMouseEnter={props.mouseEnter} 
        onMouseUp={props.mouseUp} ></td>
    )
}

export default TableCell;