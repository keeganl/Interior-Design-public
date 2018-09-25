import React, { Component } from 'react'

class WelcomeBanner extends Component { 
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="banner-container">
        <div className="banner-items">
          <h1>Interior Design</h1>
        </div>
        <div className="banner-items">
          <button id="signup">Sign Up</button>
        </div>
        <div className="banner-items">
          <button id="login">Log In</button>
        </div>
      </div>
    );
  }
}

export default WelcomeBanner;