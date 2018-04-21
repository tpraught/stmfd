import React from 'react';
import "./Table.css";

    const Table = props => (
     <div>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Fire #</th>
            <th>Year</th>
            <th>Title</th>
            <th>Rank</th>
            <th>Station</th>
            <th>Company</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
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
          </tr>
                  
        </tbody>
        </div>
    );

    export default Table
