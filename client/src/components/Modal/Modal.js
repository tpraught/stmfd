import React from 'react';
import "./Modal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
        
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader >FIRE FIGHTER</ModalHeader>
          <ModalBody>
       
            <Form>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder ={this.props.firstName} />
                <Label for="lastName">Last Name</Label>
                <Input type="text" name="lastName" id="lastName" placeholder ={this.props.lastName}/>
                <Label for="fireNumber">Fire Number</Label>
                <Input type="text" name="fireNumber" id="fireNumber" placeholder ={this.props.fireNumber}/>
                <Label for="memberSince">Member Since Year</Label>
                <Input type="text" name="memberSince" id="memberSince" placeholder ={this.props.memberSince}/>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder ={this.props.title}/>
                <Label for="rank">Rank</Label>
                <Input type="select" name="rank" id="rank" placeholder ={this.props.rank}>
                  <option>Fire Fighter</option>
                  <option>Officer</option>
                </Input>
                <Label for="station">Station</Label>
                <Input type="select" name="station" id="station" placeholder ={this.props.station}>
                  <option>Station #1</option>
                  <option>Station #2</option>
                </Input>
                <Label for="company">Company</Label>
                <Input type="select" name="company" id="company" placeholder ={this.props.company}> 
                  <option>Company A</option>
                  <option>Company B</option>
                  <option>Company C</option>
                </Input>
              </FormGroup>
         </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}>Save</Button>{' '}
            <Button color="secondary" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;