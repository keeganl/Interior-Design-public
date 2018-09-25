import React, { Component } from 'react'

let colors = ["#33658A", "#86BBD8", "#2F4858", "#F6AE2D", "#F26419"]

class ColorPalette extends Component {
  constructor(props) {
    super(props)
     this.state = {
       color: colors[0]
     }
  }
  render() {
    return (
      <div className="colorContainer" >
        <div className="color">{colors[0]}</div>
        <div className="color">{colors[1]}</div>
        <div className="color">{colors[2]}</div>
        <div className="color">{colors[3]}</div>
        <div className="color">{colors[4]}</div>
      </div>
    );
  }
}

export default ColorPalette;