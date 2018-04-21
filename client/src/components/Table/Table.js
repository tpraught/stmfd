import React from 'react';
import "./Table.css";

    const Table = props => (
     <div>
        
            <th scope="row"></th>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.fireNumber}</td>
            <td>{props.year}</td>
            <td>{props.title}</td>
            <td>{props.rank}</td>
            <td>{props.station}</td>
            <td>{props.company}</td>
            <td><button  id={props.id} type="submit" className="btn btn-success ">EDIT</button> <button id={props.id} type="submit" className="btn btn-danger">DELETE</button></td>
         
        </div>
    );

    export default Table
