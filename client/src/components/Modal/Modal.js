import React from 'react';
import "./Modal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditModal extends React.Component {
  state = {}

  save = () => {
    let newFireFighter = {
      firstName: 'Julia'
    }
    // get the data from the form
    this.props.onSave(newFireFighter)
  }


  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.isOpen}  className={this.props.className}>
          <ModalHeader >Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;