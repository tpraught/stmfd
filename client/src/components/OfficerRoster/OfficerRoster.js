import React from 'react';

//Table to dynamically render an officer roster on front-end pages
const OfficerRoster = props => (
  <tr>
		<td>{props.fireNumber}</td>
		<td>{props.firstName} {props.lastName} -{props.title} </td>
		<td>{props.year}</td>
		
  </tr>
);

export default OfficerRoster;
