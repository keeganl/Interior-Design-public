import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <ul>
            <li><img src="" alt="Profile"/></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="main">
          <h1>Generate a color pallete</h1>
          <div className="colorContainer">
            <div className="color">1</div>
            <div className="color">2</div>
            <div className="color">3</div>
            <div className="color">4</div>
            <div className="color">5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
