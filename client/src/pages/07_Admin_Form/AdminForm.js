import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';



class AdminTable extends Component {

  state = {
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

  //Method to submit a new record to the Database
  handleFormSubmit = event => {
      console.log("Saving record is triggered");
    
      API.saveRecord({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        fire_number: this.state.fireNumber,
        year_started: this.state.memberSince,
        title: this.state.title,
        rank: this.state.rank,
        station: this.state.station,
        company: this.state.company
      })
  };


  render() {
    return (
       <Container fluid>
        <Row>
         <Col xs="6" sm="4">

      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input 
            type="text" 
            name="firstName"
            id="firstName"
            onChange={this.handleInputChange}
            />
          <Label for="lastName">Last Name</Label>
          <Input 
            type="text"
            name="lastName" 
            id="lastName"
            onChange={this.handleInputChange}
            />
          <Label for="fireNumber">Fire Number</Label>
          <Input 
            type="text"
            name="fireNumber" 
            id="fireNumber"
            onChange={this.handleInputChange}
            />
          <Label for="memberSince">Member Since Year</Label>
          <Input 
            type="text" 
            name="memberSince"
            id="memberSince"
            onChange={this.handleInputChange}
            />
          <Label for="title">Title</Label>
          <Input 
            type="text" 
            name="title"
            id="title"
            onChange={this.handleInputChange}
            />
          <Label for="rank">Rank</Label>
          <Input 
            type="select"
            name="rank"
            id="rank"
            onChange={this.handleInputChange}>
            <option></option>
            <option>Fire Fighter</option>
            <option>Officer</option>
          </Input>
          <Label for="station">Station</Label>
          <Input 
            type="select"
            name="station"
            id="station"
            onChange={this.handleInputChange}>
            <option></option>
            <option>Station #1</option>
            <option>Station #2</option>
          </Input>
          <Label for="company">Company</Label>
          <Input
            type="select"
            name="company"
            id="company"
            onChange={this.handleInputChange}>
            <option></option>
            <option>Company A</option>
            <option>Company B</option>
            <option>Company C</option>
          </Input>
        </FormGroup>
       
        <Button type = "submit" onClick={this.handleFormSubmit}>Submit</Button>
      </Form>

        </Col>
    </Row>
  </Container>
    );
  }
}

export default AdminTable;