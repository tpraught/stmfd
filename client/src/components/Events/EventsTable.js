import React from 'react';

const EventsTable = props => (
	<tr key = {props.id}>
		<td width="5%" className="text-center">{props.date}</td>
		<td width="35%">{props.description}</td>
		<td width="7%" className="text-center">{props.officerStartTime}</td>
		<td width="7%" className="text-center">{props.meetingStartTime}</td>
		<td width="7%" className="text-center">{props.trainingStartTime}</td>
		<td width="7%" className="text-center">{props.drillCode}</td>
		<td width="14%" className="text-center">{props.standard}</td>
		<td width="18%" className="text-center">{props.lunchCommittee}</td>
  </tr>
    );

 export default EventsTable;
