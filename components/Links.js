import React, { Component } from 'react'



const customStyles = {
  content: {
    width: '30%',
    padding: '3em',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <li>Home</li>
        <li>Palettes</li>
        <li>Shop</li>
        <li>Explore</li>
      </React.Fragment>
    );
  }
}

export default Links