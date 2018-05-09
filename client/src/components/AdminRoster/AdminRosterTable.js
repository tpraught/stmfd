import React from 'react';

//Table to dynamically render a firefighters roster on the Admin Portal
const AdminRosterTable = props => (
  <tr>
		<td>{props.fireNumber}</td>
		<td>{props.year}</td>
		<td>{props.title}</td>
		<td>{props.rank}</td>
		<td>{props.station}</td>
		<td>{props.company}</td>
		<td className="adminButtons">
			<button  id={props.id} onClick = {props.onEdit}  type="button" className="greenButton btn">EDIT</button> 
			<button id={props.id} onClick = {props.onDelete} type="submit" className="btn redButton"><i className="far fa-trash-alt"></i></button>
		</td>
			
	</tr>
);

export default AdminRosterTable;
