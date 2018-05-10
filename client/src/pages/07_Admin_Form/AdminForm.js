import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import FormErrors from "../../components/Errors";
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
    company: "",
    formErrors:{firstName:"", lastName:"", memberSince:"", rank:""},
    firstNameValid:false,
    lastNameValid:false,
    memberSinceValid:false,
    rankValid:false,
    formValid:false
   
  }
  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let memberSinceValid = this.state.memberSinceValid;
    let rankValid = this.state.rankValid;

      switch (fieldName) {
        case "firstName":
          firstNameValid = value.length >= 2;
          fieldValidationErrors.firstName = firstNameValid ? '': ' Please enter a first name';
          break;
          case "lastName":
          lastNameValid = value.length >= 2;
          fieldValidationErrors.lastName = lastNameValid ? '': ' Please enter a last name';
          break;
          case "memberSince":
          memberSinceValid = value.length === 4;
          fieldValidationErrors.memberSince = memberSinceValid ? '': ' Please enter the membership year';
          break;
          case "rank":
          rankValid = value.length >= 7;
          fieldValidationErrors.rank = rankValid ? '': ' Please select a rank';
          break;
          default:
          break;
      }

      this.setState(
        { formErrors:fieldValidationErrors,
          firstNameValid:firstNameValid,
          lastNameValid:lastNameValid,
          memberSinceValid:memberSinceValid,
          rankValid:rankValid
        }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid:this.state.firstNameValid && this.state.lastNameValid && this.state.memberSinceValid
       && this.state.rankValid
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value}, () => {this.validateField(name,value)});
  };

  determineTitleRank = (title) => {
    let titleRankValue;

    

    if (title === "Fire Chief") {
      titleRankValue = 10;
    } else if (title === "Assistant Chief") {
      titleRankValue = 20;
    }  else if (title === "District Chief") {
      titleRankValue = 30;
    } else if (title === "Captain") {
      titleRankValue = 40;
    } else if (title === "Lieutenant") {
      titleRankValue = 50;
    } else {
      titleRankValue = 0;
    }
     return titleRankValue;
  }

  //Method to submit a new record to the Database
  handleFormSubmit = event => {
    console.log("Saving record is triggered");
    event.preventDefault();
     console.log(this.state.company); 
    let rankSort = this.determineTitleRank(this.state.title);

    API.saveRecord({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      fire_number: this.state.fireNumber,
      year_started: this.state.memberSince,
      title: this.state.title,
      rank: this.state.rank,
      station: this.state.station,
      company: this.state.company,
      rank_sort_number: rankSort
    })
    this.props.history.push('/admin/roster');
  };

  render() {
    return (
      <div>
        <AdminHeader/>
        <Wrapper>
      
          <div className="pageTitle mb-5">
            <h1>ADD FIREFIGHTER</h1>  
          </div>
          <Col sm="12">
            <Row className="clearfix text-center justify-content-center">
              <Col sm="12" md="8" className="error">
                <FormErrors formErrors={this.state.formErrors} />
              </Col>
            </Row>
          </Col>
          <Col>
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
                  <Col sm="12" md="6" className="float-left">
                    <p className="pl-3">* Required fields</p>
                  </Col>
                  <Col sm="12" md="6">
                    <Button className="float-right redButton addButton mr-3" type="submit" disabled = {!this.state.formValid} onClick={this.handleFormSubmit}>ADD</Button>
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