import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

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
    event.preventDefault();
    this.props.history.push('/admin/roster');

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
      <div>
        <AdminHeader/>
        <Wrapper>
          <div className="pageTitle">
            <h1>ADD FIREFIGHTER</h1>  
          </div>
          <Col className="mt-5 mb-5">
            <Row className="justify-content-center">
              <Form className="adminForm">
                <FormGroup>
                  <Col sm="12">
                    <Row>
                      <Col sm="12" md="6">
                        <Label for="firstName">FIRST NAME*</Label>
                        <Input 
                          type="text" 
                          name="firstName"
                          id="firstName"
                          onChange={this.handleInputChange}
                          />
                      </Col>
                      <Col sm="12" md="6">
                        <Label for="lastName">LAST NAME*</Label>
                        <Input 
                          type="text"
                          name="lastName" 
                          id="lastName"
                          onChange={this.handleInputChange}
                          />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="2">
                        <Label for="fireNumber">FIRE #</Label>
                        <Input 
                          type="text"
                          name="fireNumber" 
                          id="fireNumber"
                          onChange={this.handleInputChange}
                          />
                      </Col>
                      <Col sm="12" md="4">
                        <Label for="memberSince">MEMBER SINCE*</Label>
                        <Input 
                          type="text" 
                          name="memberSince"
                          id="memberSince"
                          onChange={this.handleInputChange}
                          />
                      </Col>
                      <Col sm="12" md="6">
                        <Label for="title">TITLE</Label>
                        <Input 
                          type="select"
                          name="title"
                          id="title"
                          onChange={this.handleInputChange}>
                          <option></option>
                          <option>Chief</option>
                          <option>Assistant Chief</option>
                          <option>District Chief</option>
                          <option>Captain</option>
                          <option>Lieutenant</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="4">
                        <Label for="rank">RANK*</Label>
                        <Input 
                          type="select"
                          name="rank"
                          id="rank"
                          onChange={this.handleInputChange}>
                          <option></option>
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
                          onChange={this.handleInputChange}>
                          <option></option>
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
                          onChange={this.handleInputChange}>
                          <option></option>
                          <option>Company A</option>
                          <option>Company B</option>
                          <option>Company C</option>
                        </Input>
                      </Col>
                    </Row>
                  </Col>
                </FormGroup>
                <Row>
                  <Col sm="12">
                    <Button className="float-right redButton addButton mr-3" type="submit" onClick={this.handleFormSubmit}>ADD</Button>
                  </Col>
                </Row>
                <Row>
                <Col sm="12">
                  <p>* designates required fields</p>
                </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default AdminTable;