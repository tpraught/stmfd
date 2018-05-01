import React, { Component } from "react";
import API from "../../utils/API";

import { Row, Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import AdminHeader from "../../components/AdminHeader";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class AdminExplorerSchedule extends Component {

  state = {
    firstName: "",
    lastName: "",
    fireNumber: "",
    memberSince: "",
    title: "",
    rank: "",
    station: "",
    company: "",
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
          <div className="pageTitle">
            <h1> Explorer Training Schedule </h1>  
          </div>
          <Col className="mt-5 mb-5">
            <Row className="justify-content-center">
              <Form className="adminForm">
                <FormGroup>
                  <Col sm="12">
                    <Row>
                      <Col sm="12" md="6">
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
                      
                      <Col sm="12" md="6">
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
                    </Row>
                    <Row>
                      <Col sm="12" md="4">
                      <Label for="weekDay"> WEEK DAY*</Label>
                        <Input 
                         type="select" 
                          name="weekDay"
                          id="weekDay"
                          onChange={this.handleInputChange}
                          >
                          <option></option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Friday</option>
                          <option>Saturday</option>
                          <option>Sunday</option>
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
                      <Col sm="12" md="4">
                        <Label for="time">TIME</Label>
                          <Input 
                            type="text" 
                            name="time"
                            id="time"
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

export default AdminExplorerSchedule;