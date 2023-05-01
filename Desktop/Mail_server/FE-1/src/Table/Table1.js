import React, { Component } from 'react';
import './style.css';

class Table extends Component {
  render() {
    return (
        <table >
        <thead>
          <tr>
          <th colSpan="2">Station information</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>Address</td>
            <td>Asklipiou</td>
          </tr>
          <tr>
            <td>Municipality</td>
            <td>Trikkaion</td>
          </tr>
          <tr>
            <td>Prefecture</td>
            <td>Trikalon</td>
          </tr>
          <tr>
            <td>Active since</td>
            <td>16-06-2015 14:00:00</td>
          </tr>
          <tr>
            <td>Last update</td>
            <td>03-04-2023</td>
          </tr>
          <tr>
            <td>Measurement files captured by handlheld device</td>
            <td>Click here</td>
          </tr>
        </tbody>
      </table>
      
    );
  }
}

export default Table;