import React, {Component} from 'react'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

Modal.setAppElement(document.getElementById('root'))

class SignUpModal extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  signUp() {
    //TODO: SOME CALL TO CREATE A NEW USER
    
  }

  render() {
    return (
      <div>
        <button id="signup" onClick={this.openModal}>Sign Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <h2>Sign Up</h2>
          <form>
            <div>
              <label>Email Address: </label>
              <div><input /></div>
            </div>
            <div>
              <label>Username: </label>
              <div><input /></div>
            </div>
            <div>
              <label>Password: </label>
              <div><input /></div>
            </div>
            <div>
              <label>Confirm Password: </label>
              <div><input /></div>
            </div>
          </form>
          <br/>
          <button onClick={this.closeModal}>Cancel</button>
          <button onClick={this.signUp}>Sign Up</button>
        </Modal>
      </div>
    )
  }
}

export default SignUpModal
