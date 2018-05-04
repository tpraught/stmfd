import React from 'react';

 const AdminEventsTable = props => (
  <tr>
    
        {/* <th scope="row"></th> */}
        <td>{props.date}</td>
       <td>{props.month}</td>
        <td>{props.year}</td>
        <td>{props.description}</td>
        <td>{props.meetingStartTime}</td>
        <td>{props.officerStartTime}</td>
        <td>{props.trainingStartTime}</td>
        <td>{props.drillCode}</td>
        <td>{props.lunchCommittee}</td>
   
       
       <td className="adminButtons">
            <button id={props.id} onClick = {props.onDelete} type="submit" className="btn redButton"><i className="far fa-trash-alt"></i></button></td>
        </tr>
    );

    export default AdminEventsTable;
