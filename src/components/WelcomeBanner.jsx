import React, { Component } from 'react'

import LoginModal from './Modals/loginModal'
import SignUpModal from './Modals/signUpModal'

class WelcomeBanner extends Component { 
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="banner-container">
        <div className="banner-items">
          <h1>Interior Design</h1>
        </div>
        <div className="banner-items">
          <SignUpModal>Sign Up</SignUpModal>
        </div>
        <div className="banner-items">
          <LoginModal>Log In</LoginModal>
        </div>
      </div>
    )
  }
}

export default WelcomeBanner