import React, {Component} from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '30%',
    padding: '3em',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement(document.getElementById('root'))

class LoginModal extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.login = this.login.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  login() {
    //SOME CALL TO CHECK IF NAME AND PASS MATCHES

  }

  render() {
    return (
      <div>
        <button id="login" onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal">
          <h2 className="modal-header">Login</h2>
          <form className="modal-body">
            <div className="input-field">
              <label className="labels" for="username">
                <h4>Username</h4>
              </label>
              <div><input className="signup-fields" type="text" name="username" id="username" /></div>
            </div>
            <div className="input-field">
              <label className="labels">
                <h4>Password</h4> 
              </label>
              <div><input className="signup-fields" /></div>
            </div>
          <div>
            <button className="modal-cancel-button" onClick={this.closeModal}>Cancel</button>
            <button className="modal-confirm-button" onClick={this.login}>Login</button>
          </div>
          </form>
        </Modal>
      </div>
    )
  }
}

export default LoginModal
