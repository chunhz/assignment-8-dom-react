import React, { Component } from "react";

class TableCell extends Component {
  constructor(props){
    super(props)
  }

  changeColor = () => {
    this.setState({
      color: this.state.color,
      // hasColor: true
  });
  }
  render(){
    console.log(this.props.color)
    const pcolor = this.props.color;
    return (<td onClick={this.setColor} style = {{
      width: "30px", 
      height: "30px", 
      backgroundColor: pcolor
    }} 
    ></td>)
    // return( 
      
      
    //   <td  onClick = {this.changeColor}style= {{
    //     width: "30px", 
    //     height: "30px", 
    //     backgroundColor: "Blue",
    //     border: "black solid"
    //   }} 
        
    //     onMouseDown={this.props.mouseDown} 
    //     onMouseEnter={this.props.mouseEnter} 
    //     onMouseUp={this.props.mouseUp} ></td>
      
    // )
  }
}

export default TableCell;