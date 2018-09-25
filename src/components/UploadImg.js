import React, { Component } from 'react'

class UploadImg extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='colorContainer'>
        <div className='color'>
          <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg" />
        </div>
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
        <div className='color'></div>
      </div>
    )
  }
}

export default UploadImg