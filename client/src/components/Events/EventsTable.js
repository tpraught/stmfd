import React from 'react';

const EventsTable = props => (
	<tr key = {props.id}>
		<td>{props.date}</td>
		<td>{props.description}</td>
		<td>{props.officerStartTime}</td>
		<td>{props.meetingStartTime}</td>
		<td>{props.trainingStartTime}</td>
		<td>{props.drillCode}</td>
		<td>{props.lunchCommittee}</td>
  </tr>
    );

 export default EventsTable;
