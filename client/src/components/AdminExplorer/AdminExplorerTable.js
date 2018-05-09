import React from 'react';
//Table to dynamically render a schedule of Explorer events on the Admin Portal
const AdminExplorerTable = props => (

  <tr>
    <td>{props.date}</td>
    <td>{props.month}</td>
    <td>{props.weekDay}</td>
    <td>{props.description}</td>
    <td>{props.eventType}</td>
    <td>{props.time}</td>
    <td className="adminButtons">
        <button id={props.id} onClick = {props.onDelete} type="submit" className="btn redButton"><i className="far fa-trash-alt"></i></button>
		</td>
  </tr>
  );

export default AdminExplorerTable;
