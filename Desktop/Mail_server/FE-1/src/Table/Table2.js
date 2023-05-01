import React, { Component } from 'react';
import './style.css';

class Table2 extends Component {
  render() {
    return (
        <table>
<thead>
  <tr>
    <th colSpan="4">Electric Field Strength</th>
  </tr>
</thead>
        <tbody>
            
          <tr>   
            <td>Frequency Bands(Mhz)</td>           
           <td>FrequencyBand Limit(V/m)</td>
           <td>Average Value (V/m)</td>
           <td>Peak Value (V/m)</td>       
            </tr>
          <tr> 
               <td>Broadband Zone</td>  
                <td>21.7</td>
                <td>0.19</td>
                <td>0.25</td>
                </tr>
          <tr>  
            <td>EGSM-900</td>   
            <td>31.8</td>
            <td>0.03</td>
            <td>0.04</td>
            </tr>
          <tr>
             <td>EGSM-1800</td>   
               <td>45.1</td>
               <td>0.03</td>
               <td>0.04</td>
               </tr>
          <tr>
            <td>UMTS</td>   
               <td>47.2</td>
               <td>0.03</td>
               <td>0.03</td>
               </tr>

          </tbody>
      </table>
    );
  }
}

export default Table2;