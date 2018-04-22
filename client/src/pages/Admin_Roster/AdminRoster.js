import React, { Component } from "react";
import { Table } from 'reactstrap';
import RosterTable from "../../components/Roster";
import API from "../../utils/API";

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
         
            <RosterTable
            key={fireFighter._id} 
            id={fireFighter._id} 
            firstName= {fireFighter.first_name}
            lastName = {fireFighter.last_name}  
            fireNumber={fireFighter.fire_number}   
            year={fireFighter.year_started}  
            title={fireFighter.title}  
            rank={fireFighter.rank}  
            station={fireFighter.station}  
            company={fireFighter.company}>
            </RosterTable>  
          
        
        ))}
        </tbody>
      </Table>
    )
  }
}

export default FireRoster;