import React, { Component } from 'react';
import user from './assets/ProfilePic.png'
import './sass/App.css';

import ColorPalette from './components/ColorPalette'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <ul>
            <li><img src={user} width="100px" height="100px"  alt="Profile"/></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="main">
          <h1>Interior Design</h1>
          <h2>Generate a color pallete</h2>
          <ColorPalette />
        </div>
      </div>

    );
  }
}

export default App;
