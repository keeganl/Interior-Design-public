import React, { Component } from 'react'
import item from '../assets/couch.jpg'
import staroutline from '../assets/staroutline.png'
import star from '../assets/star.png'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: staroutline
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.state.img === staroutline) {
      this.setState(state => ({ img: star }))
    } else {
      this.setState(state => ({ img: staroutline }))
    }

  }


  render() {
    return (
      <div className="cardContainer">
        <img src={item} width="250px" height="250px" alt="Couch"/>
        <div className="content">
          <p>Buy Now</p>
          <img src={this.state.img} onClick={this.handleClick} width="31.33px" height="30px" alt="star"/>
        </div>
      </div>
    )
  }
}

export default Card;