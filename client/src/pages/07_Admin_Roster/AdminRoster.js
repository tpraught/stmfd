import React, { Component } from "react";
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import AdminRosterTable from "../../components/AdminRoster";
import AdminHeader from "../../components/AdminHeader";
import EditModal from "../../components/Modal";
import Footer from "../../components/Footer";

import { Col, Row } from "../../components/Grid";

import API from "../../utils/API";

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
    editing: false,
    currentFireFighter: null, 
    id: "",
    firstName : "",
    lastName: "",
    fireNumber:"",
    memberSince: "",
    title:"",
    rank:"",
    station:"",
    company:""
  
  };

  componentDidMount() {
    this.loadRoster()
  };
  saveRecord = () => {

      this.setState({
        editing: false,
      })

    API.editRecord({
      id: this.state.id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      fire_number: this.state.fireNumber,
      year_started: this.state.memberSince,
      title: this.state.title,
      rank: this.state.rank,
      station: this.state.station,
      company: this.state.company
    })
   
    this.loadRoster();
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadRoster = () => {
    API.getRoster()
   .then(res => this.setState({ fireFighters: res.data}))
   .catch(err => console.log(err));
  };

  deleteRecord = id => {
    console.log("I'm clicked to delete",id);
    API.deleteRecord(id)
      .then(res => this.loadRoster())
      .catch(err => console.log(err));
  };

  editRecord = (fireFighter) => {
    console.log("edited fire fighter",fireFighter);
    
    this.setState({
      editing: true,
      currentFireFighter: fireFighter,
      id: fireFighter._id,
      firstName:fireFighter.first_name,
      lastName:fireFighter.last_name,
      fireNumber:fireFighter.fire_number,
      memberSince:fireFighter.year_started,
      title:fireFighter.title,
      rank:fireFighter.rank,
      station:fireFighter.station,
      company:fireFighter.company
    })
  }
   
 
  render() {
    const isLoggedIn = this.props.isLoggedIn;
 
    return (
      <div> 
        <AdminHeader isLoggedIn = {isLoggedIn} history = {this.props.history}/>
        <div className="col-md-8 offset-md-2 mb-5">
          <Row>
            <Col size="md-12">

              <EditModal
                currentFireFighter = {this.state.currentFireFighter}
                isOpen = {this.state.editing}
                onSave = { () => { this.saveRecord(); } }
                id = {this.state.id}
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                fireNumber = {this.state.fireNumber}
                memberSince = {this.state.memberSince}
                title = {this.state.title}
                rank = {this.state.rank}
                station = {this.state.station} 
                company = {this.state.company}
                handleInputChange = {this.handleInputChange}
                onCancel = {() => {
                  this.setState({
                    editing: false
                  })
                }} />
                
                <Link to="/admin/add"> 
                  <Button className="float-right redButton addButton Bborder-0">ADD FIREFIGHTER</Button>
                </Link>

                <Table className = "adminTable">  
                  <thead>
                      <tr>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>FIRE #</th>
                        <th>YEAR</th>
                        <th>TITLE</th>
                        <th>RANK</th>
                        <th>STATION</th>
                        <th>COMPANY</th>
                        <th></th>
                      </tr>
                  </thead>
        
                  <tbody>
                    {this.state.fireFighters.map(fireFighter =>( 
                      
                      <AdminRosterTable
                      key={fireFighter._id} 
                      id={fireFighter._id} 
                      firstName= {fireFighter.first_name}
                      lastName = {fireFighter.last_name}  
                      fireNumber={fireFighter.fire_number}   
                      year={fireFighter.year_started}  
                      title={fireFighter.title}  
                      rank={fireFighter.rank}  
                      station={fireFighter.station}  
                      company={fireFighter.company}
                      onEdit={() => this.editRecord(fireFighter)}
                      onDelete={() => this.deleteRecord(fireFighter._id)}
                      >
                      </AdminRosterTable>  
                    
                    ))}
                  </tbody>
                </Table>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default FireRoster;