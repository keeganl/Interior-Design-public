import React, { Component } from 'react'
import user from '../assets/ProfilePic.png'

class UploadImg extends Component {
  constructor(props) {
    super(props)
    this.state ={
    
    }
    this.filereader = {};
    this.printPicture = this.printPicture.bind(this)
    this.handleFileRead = this.handleFileRead.bind(this)
  }

  handleFileRead(event){
    const content = this.filereader.result;
    document.getElementById('test').src = content;
    console.log(content);
  }

  printPicture(something){
    this.filereader = new FileReader();
    this.filereader.onloadend = this.handleFileRead;
    this.filereader.readAsDataURL(something);
    console.log(this.filereader);
  }

  render() {
    return (
      
      <div className='colorContainer'>
        <img src={user} id="test" alt="test" height="500px"></img>
        <div className='color'>
          <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg" 
            onChange={e => this.printPicture(e.target.files[0])}/>
        </div>
        <button onClick={this.printPicture}>HIHIHIHI</button>
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
      </div>
    )
  }
}

export default UploadImg