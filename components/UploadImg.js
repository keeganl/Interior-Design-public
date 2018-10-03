import React, { Component } from 'react'
import upload from '../assets/Upload.png'

class UploadImg extends Component {
  constructor(props) {
    super(props)
    
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
    return <div className="imageContainer">
        <div className="image">
          <img src={upload} id="test" alt="test" width="80%" />
        </div>
        <div className="image">
          <label htmlFor="avatar">
            Choose file
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={e => this.printPicture(e.target.files[0])} />
          </label>
        </div>
        {/* <button onClick={this.printPicture}>HIHIHIHI</button> */}
        {/* 
         */}
      </div>;
  }
}

export default UploadImg