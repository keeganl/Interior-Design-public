import React, { Component } from 'react'
import Links from './Links'
import user from '../assets/ProfilePic.png'

class NavBar extends Component {
  constructor(props) {
   super(props)
    this.state = {
      name: "John Doe"
    } 
  }
  

  render() {
    return(
      <React.Fragment>
        <img src={this.props.src} alt=""/>
        <ul>
          <li><img src={user} width="100px" height="100px" alt="Profile" /></li>
          <li><p>Hi, {this.state.name}</p></li>
          <Links />
        </ul>
      </React.Fragment>
    )
  }
}

export default NavBar