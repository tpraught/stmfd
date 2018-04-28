import React from 'react';
import "./Modal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class EditModal extends React.Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    fireNumber: "",
    memberSince: "",
    title: "",
    rank: "",
    station: "",
    company: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  save = () => {
  
    let newFireFighter = {
      id:this.props.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fireNumber: this.state.fireNumber,
      memberSince: this.state.memberSince,
      title: this.state.title,
      rank: this.state.rank,
      station: this.state.station,
      company: this.state.company

    }
    console.log ("I'm editing");
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
                <Input 
                  type="text" 
                  name="firstName"
                  id="firstName"
                  placeholder ={this.props.firstName}
                  onChange={this.handleInputChange} />
                <Label for="lastName">Last Name</Label>
                <Input 
                  type="text" 
                  name="lastName"
                  id="lastName"
                  placeholder ={this.props.lastName}
                  onChange={this.handleInputChange}/>
                <Label for="fireNumber">Fire Number</Label>
                <Input 
                  type="text" 
                  name="fireNumber" 
                  id="fireNumber"
                  placeholder ={this.props.fireNumber}
                  onChange={this.handleInputChange}/>
                <Label for="memberSince">Member Since Year</Label>
                <Input 
                  type="text"
                  name="memberSince"
                  id="memberSince"
                  placeholder ={this.props.memberSince}
                  onChange={this.handleInputChange}/>
                <Label for="title">Title</Label>
                <Input 
                  type="text"
                  name="title"
                  id="title"
                  placeholder ={this.props.title}
                  onChange={this.handleInputChange}/>
                <Label for="rank">Rank</Label>
                <Input
                   type="select" 
                   name="rank"
                   id="rank"
                   placeholder ={this.props.rank}
                   onChange={this.handleInputChange}>
                      <option>Fire Fighter</option>
                      <option>Officer</option>
                </Input>
                <Label for="station">Station</Label>
                <Input 
                  type="select" 
                  name="station" 
                  id="station"
                  placeholder ={this.props.station}
                  onChange={this.handleInputChange}>
                    <option>Station #1</option>
                    <option>Station #2</option>
                </Input>
                <Label for="company">Company</Label>
                <Input 
                  type="select"
                  name="company"
                  id="company"
                  placeholder ={this.props.company}
                  onChange={this.handleInputChange}> 
                    <option>Company A</option>
                    <option>Company B</option>
                    <option>Company C</option>
                </Input>
              </FormGroup>
         </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="success" id = {this.props.id} onClick={this.save}>Save</Button>
            <Button color="danger" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;