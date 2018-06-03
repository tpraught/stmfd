import React, { Component } from "react";
import API from "../../utils/API";
import { Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import FormErrors from "../../components/Errors";
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import {getScheduleSortDate} from '../../utils/date_time_sort_utility.js';

class AdminEventsForm extends Component {

  state = {
    month: "",
    date: "",
    year: "",
    description: "",
    officerStartTime: "",
    meetingStartTime: "",
    trainingStartTime:"",
    drillCode:"",
    lunchCommittee:"",
    formErrors:{month:"", date:"", year:"", description:""},
    monthValid:false,
    dateValid:false,
    yearValid:false,
    descriptionValid:false,
    formValid:false
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let monthValid = this.state.monthValid;
    let dateValid = this.state.dateValid;
    let yearValid = this.state.yearValid;
    let descriptionValid = this.state.descriptionValid;
   
      switch (fieldName) {
        case "month":
          monthValid = value.length >= 2;
          fieldValidationErrors.month = monthValid ? '': ' Please select a month';
          break;
          case "date":
          dateValid = value.length >= 1;
          fieldValidationErrors.date= dateValid ? '': ' Please select a date';
          break;
          case "year":
          yearValid = value.length === 4;
          fieldValidationErrors.year = yearValid ? '': ' Please select a year';
          break;
          case "description":
          descriptionValid = value.length >= 3;
          fieldValidationErrors.description = descriptionValid ? '': ' Please enter a description';
          break;
          default:
          break;
      }

      this.setState(
        { formErrors:fieldValidationErrors,
          monthValid:monthValid,
          dateValid:dateValid,
          yearValid:yearValid,
          descriptionValid:descriptionValid,
        }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid:this.state.monthValid && this.state.dateValid && this.state.yearValid && this.state.descriptionValid
    })
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value}, () => {this.validateField(name,value)});
  };

   //Method to submit a new record to the Database
  handleFormSubmit = event => {
    console.log("Saving FD schedule");
    event.preventDefault();
	
	var sortDateString = getScheduleSortDate(this.state.year, this.state.month, this.state.date, this.state.officerStartTime);
	
   API.saveTrainingEvent({
      month: this.state.month,
      date: this.state.date,
      year: this.state.year,
      description: this.state.description,
      officer_start_time: this.state.officerStartTime,
      meeting_start_time: this.state.meetingStartTime,
      training_start_time:this.state.trainingStartTime,
      drill_code:this.state.drillCode,
      standard:this.state.standard,
      lunch_committee:this.state.lunchCommittee,
	    sort_date_time: sortDateString,
     
    })
    this.props.history.push('/admin/trainingschedule');
  };

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    return (
      <div>
      <AdminHeader isLoggedIn = {isLoggedIn} history = {this.props.history}/>
        <Wrapper>
          <div className="pageTitle mb-5">
            <h1>ADD FD MEETING/TRAINING</h1>  
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
                      <Col sm="12" md="4">
                        <Label for="month">MONTH*</Label>
                        <Input 
                         type="select" 
                          name="month"
                          id="month"
                          onChange={this.handleInputChange}
                          >
                          <option></option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                        </Input>
                      </Col>
                      
                      <Col sm="12" md="4">
                      <Label for="date">DATE*</Label>
                        <Input 
                         type="select" 
                          name="date"
                          id="date"
                          onChange={this.handleInputChange}
                          >
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </Input>
                      </Col>
                   
                      <Col sm="12" md="4">
                        <Label for="year">YEAR*</Label>
                        <Input 
                          type="select"
                          name="year"
                          id="year"
                          onChange={this.handleInputChange}>
                          <option></option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                          <option>2028</option>
                        </Input>
                      </Col>
                      </Row>

                        <Row>
                                    
                  
                        <Col sm="12" md="4">
                            <Label for="officerStartTime">OFFICER START TIME</Label>
                              <Input 
                                type="text" 
                                name="officerStartTime"
                                id="officerStartTime"
                                placeholder = "e.g. 18:00"
                                onChange={this.handleInputChange}
                                />
                          </Col>
                          <Col sm="12" md="4">
                            <Label for="meetingStartTime">MEETING START TIME</Label>
                              <Input 
                                type="text" 
                                name="meetingStartTime"
                                id="meetingStartTime"
                                placeholder = "e.g. 19:00"
                                onChange={this.handleInputChange}
                                />
                      </Col>
                      <Col sm="12" md="4">
                            <Label for="trainingStartTime">TRAINING START TIME</Label>
                              <Input 
                                type="text" 
                                name="trainingStartTime"
                                id="trainingStartTime"
                                placeholder = "e.g. 17:00"
                                onChange={this.handleInputChange}
                                />
                      </Col>
                      <Col sm="12" md="4">
                      <Label for="drillCode">DRILL CODE</Label>
                        <Input 
                        type="text" 
                          name="drillCode"
                          id="drillCode"
                          onChange={this.handleInputChange}
                         />
                        </Col>
                        <Col sm="12" md="4">
                      <Label for="standard">STANDARD</Label>
                        <Input 
                        type="text" 
                          name="standard"
                          id="standard"
                          onChange={this.handleInputChange}
                         />
                        </Col>
                        <Col sm="12" md="4">
                            <Label for="lunchCommittee">LUNCH COMMITTEE</Label>
                              <Input 
                                type="text" 
                                name="lunchCommittee"
                                id="lunchCommittee"
                                placeholder = "Enter Names"
                                onChange={this.handleInputChange}
                                />
                      </Col>
                    </Row>
                      <Row>
                      <Col sm="12" md="12">
                        <Label for="description">DESCRIPTION*</Label>
                          <Input 
                            type="text" 
                            name="description"
                            id="description"
                            onChange={this.handleInputChange}
                            />
                      </Col>
                    </Row>
                  </Col>
                </FormGroup>
                <Row>
                  <Col sm="12" md="6" className="float-left">
                    <p className="pl-3">* Required fields</p>
                  </Col>
                  <Col sm="12" md="6">
                    <Button className="float-right redButton addButton mr-3" type="submit" disabled = {!this.state.formValid}  onClick={this.handleFormSubmit}>ADD</Button>
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

export default AdminEventsForm;