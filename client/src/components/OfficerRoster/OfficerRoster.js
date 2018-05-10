import React from 'react';
import "./OfficerRoster.css";

const OfficerRoster = props => (
     <tr>
        <td>{props.fireNumber}</td>
        <td>{props.firstName} {props.lastName} -{props.title} </td>
        <td>{props.year}</td>
        
    </tr>
    );

export default OfficerRoster;
