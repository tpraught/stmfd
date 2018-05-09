import React from 'react';

//Table to dynamically render a schedule of Explorer events on front-end pages
const ExplorerEventsTable = props => (
	<tr key = {props.id}>
		<td width="25%">{props.day_of_week}, {props.month}, {props.date}</td>
		<td width="40%">{props.description}</td>
		<td width="20%">{props.eventType}</td>
		<td width="15%" className="text-center">{props.time}</td>
  </tr>
);

export default ExplorerEventsTable;
