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
        <td className="adminButtons">
            <button  id={props.id} onClick = {props.onEdit}  type="button" className="greenButton btn">EDIT</button> 
            <button id={props.id} onClick = {props.onDelete} type="submit" className="btn redButton"><i className="far fa-trash-alt"></i></button></td>
         
        </tr>
    );

    export default AdminRosterTable;
