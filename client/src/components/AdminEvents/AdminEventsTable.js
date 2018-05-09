import React from 'react';
//Table to dynamically render a schedule of events on the Admin Portal

const AdminEventsTable = props => (
  <tr>
		<td width="15%">{props.month} {props.date}, {props.year}</td>
		<td width="40%">{props.description}</td>
		<td width="7%" className="text-center">{props.meetingStartTime}</td>
		<td width="7%" className="text-center">{props.officerStartTime}</td>
		<td width="7%" className="text-center">{props.trainingStartTime}</td>
		<td width="4%" className="text-center">{props.drillCode}</td>
		<td width="5%" className="text-center">{props.standard}</td>
		<td width="15%" className="text-center">{props.lunchCommittee}</td>
		<td className="adminButtons">
				<button id={props.id} onClick = {props.onDelete} type="submit" className="btn redButton"><i className="far fa-trash-alt"></i></button></td>
	</tr>
    );

export default AdminEventsTable;
