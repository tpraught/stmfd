import React from 'react';
import { Table } from 'reactstrap';

export default class FireRoster extends React.Component {
  render() {
    return (
      <Table>
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
            <td>Steve</td>
            <td>Hosch</td>
            <td>16</td>
            <td>1999</td>
            <td>Fire Chief</td>
            <td>Officer</td>
            <td>Chief</td>
            <td>N/A</td>
            <td><button className="btn btn-success">EDIT</button> <button className="btn btn-danger">DELETE</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Gordy</td>
            <td>Dehmer</td>
            <td>3</td>
            <td>1983</td>
            <td>Assistant Fire Chief</td>
            <td>Officer</td>
            <td>Assistant Chief</td>
            <td>N/A</td>
            <td><button className="btn btn-success">EDIT</button> <button className="btn btn-danger">DELETE</button></td>
          </tr>
          
        </tbody>
      </Table>
    );
  }
}