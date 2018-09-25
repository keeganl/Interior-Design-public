import React, { Component } from 'react'
import user from '../assets/ProfilePic.png'



class NavBar extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   name: username[0]
    // } 
  }

  // componentDidMount() {
  //   this.setState({ name: username[1] })
  // }

  render() {
    return(
      <React.Fragment>
        <ul>
          <li><img src={user} width="100px" height="100px" alt="Profile" /></li>
          <li><p>Hi, {this.props.name}</p></li>
          <li>Home</li>
          <li>Profile</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;