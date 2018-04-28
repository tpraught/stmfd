import React from 'react';
import "./AdminRosterTable.css";

    const AdminRosterTable = props => (
  <tr>
    
        {/* <th scope="row"></th> */}
       
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.fireNumber}</td>
        <td>{props.year}</td>
        <td>{props.title}</td>
        <td>{props.rank}</td>
        <td>{props.station}</td>
        <td>{props.company}</td>
        <td>
            <button  id={props.id} onClick = {props.onEdit}  type="button" className="btn btn-success ">EDIT</button> 
            <button id={props.id} onClick = {props.onDelete} type="submit" className="btn btn-danger">DELETE</button></td>
         
        </tr>
    );

    export default AdminRosterTable;
