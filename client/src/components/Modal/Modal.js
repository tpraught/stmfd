import React from 'react';
import { Row, Col } from 'reactstrap';
import { Modal,ModalBody, ModalFooter } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class EditModal extends React.Component {


  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    fireNumber:this.props.fireNumber,
    memberSince: this.props.memberSince,
    title: this.props.title,
    rank: this.props.rank,
    station: this.props.station,
    company: this.props.company,
  }


  render() {
    console.log(this.state.fireNumber);
    return (
      <div>
        
        <Modal isOpen={this.props.isOpen}>
          
            <div className="pageTitle mt-4 pb-2">
              <h1>EDIT FIREFIGHTER</h1>
            </div>

          <ModalBody>
       
            <Form className="adminForm">
              <FormGroup>
                  <Col sm="12">
                    <Row>
                      <Col sm="12" md="6">
                        <Label for="firstName">FIRST NAME</Label>
                        <Input 
                          type="text" 
                          name="firstName"
                          id="firstName"
                          defaultValue ={this.props.firstName}
                          onChange={this.props.handleInputChange} />
                      </Col>
                      <Col sm="12" md="6">
                        <Label for="lastName">LAST NAME</Label>
                        <Input 
                          type="text" 
                          name="lastName"
                          id="lastName"
                          defaultValue ={this.props.lastName}
                          onChange={this.props.handleInputChange}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="2">
                        <Label for="fireNumber">FIRE #</Label>
                        <Input 
                          type="text" 
                          name="fireNumber" 
                          id="fireNumber"
                          defaultValue ={this.props.fireNumber}
                          onChange={this.props.handleInputChange}/>
                      </Col>
                      <Col sm="12" md="4">
                        <Label for="memberSince">MEMBER SINCE</Label>
                        <Input 
                          type="text"
                          name="memberSince"
                          id="memberSince"
                          defaultValue ={this.props.memberSince}
                          onChange={this.props.handleInputChange}/>
                      </Col>
                      <Col sm="12" md="6">
                        <Label for="title">TITLE</Label>
                        <Input 
                          type="select"
                          name="title"
                          id="title"
                          defaultValue ={this.props.title}
                          onChange={this.props.handleInputChange}>
                          <option></option>
                          <option>Fire Chief</option>
                          <option>Assistant Chief</option>
                          <option>District Chief</option>
                          <option>Captain</option>
                          <option>Lieutenant</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="4">
                        <Label for="rank">RANK</Label>
                        <Input
                          type="select" 
                          name="rank"
                          id="rank"
                          defaultValue ={this.props.rank}
                          onChange={this.props.handleInputChange}>
                              <option>Fire Fighter</option>
                              <option>Officer</option>
                        </Input>
                      </Col>
                      <Col sm="12" md="4">
                        <Label for="station">STATION</Label>
                        <Input 
                          type="select" 
                          name="station" 
                          id="station"
                          defaultValue ={this.props.station}
                          onChange={this.props.handleInputChange}>
                            <option>Station #1</option>
                            <option>Station #2</option>
                        </Input>
                      </Col>
                      <Col sm="12" md="4">
                        <Label for="company">COMPANY</Label>
                        <Input 
                          type="select"
                          name="company"
                          id="company"
                          defaultValue ={this.props.company}
                          onChange={this.props.handleInputChange}> 
                            <option>Company A</option>
                            <option>Company B</option>
                            <option>Company C</option>
                        </Input>
                      </Col>
                    </Row>
                  </Col>
              </FormGroup>
         </Form>

          </ModalBody>
          <ModalFooter>
            <Button className="greenButton btn" id = {this.props.id} onClick={this.props.onSave}>SAVE</Button>
            <Button className="redButton btn" onClick={this.props.onCancel}><i className="fas fa-ban"></i></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditModal;