import React from 'react';

const ExplorerEventsTable = props => (
	<tr key = {props.id}>
		<td>{props.day_of_week}, {props.month}, {props.date}</td>
		<td>{props.description}</td>
		<td className="text-center">{props.time}</td>
  </tr>
    );

 export default ExplorerEventsTable;
