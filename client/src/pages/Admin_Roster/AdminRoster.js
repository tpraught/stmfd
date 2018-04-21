import React, { Component } from "react";
import { Table } from 'reactstrap';

class FireRoster extends Component { 
 
  state = {
    fireFighters:[],
  
  };

  componentDidMount() {
    this.loadRoster()
  }
  
  loadRoster = () => {
    console.log("I'm triggered")
    API.getRoster()
   .then(res => this.setState({ fireFighters: res.data}))
   .catch(err => console.log(err));
  };
  
 
    render() {

    return (

      <Table>  
       <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Fire #</th>
            <th>Year</th>
            <th>Title</th>
            <th>Rank</th>
            <th>Station</th>
            <th>Company</th>
            <th>Admin</th>
          </tr>
        </thead>
       
        <tbody>
        {this.state.fireFighters.map(fireFighter =>( 
          <tr 
            id={fireFighter._id} 
            firstName= {fireFighter.web_url}
            lastName = {fireFighter.headline.main}  
            fireNumber={fireFighter.pub_date}   
            year={fireFighter.pub_date}  
            title={fireFighter.pub_date}  
            rank={fireFighter.pub_date}  
            station={fireFighter.pub_date}  
            company={fireFighter.pub_date}  
          >
          </tr>
        ))}
        </tbody>
      </Table>
    )
  }
}

export default FireRoster;