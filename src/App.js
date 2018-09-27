import React, { Component } from 'react'
import './sass/App.css'

import ColorPalette from './components/ColorPalette'
import NavBar from './components/NavBar'
import WelcomeBanner from './components/WelcomeBanner'
import UploadImg from './components/UploadImg'

let username = ['username', 'Keegan', 'Braeden', 'Zach', 'Vinny']

class App extends Component {
  //constructor(props) {
  //  super(props)     
  //}
  
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <NavBar name={username[0]} />
        </div>
        <div className="main">
          <WelcomeBanner />
          <h2>Generate a color pallete</h2>
          <ColorPalette />
          <h2>Upload an image</h2>
          <UploadImg />
        </div>
      </div>

    )
  }
}

export default App
