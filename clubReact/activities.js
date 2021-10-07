import React from "react";
import ReactDOM from "react-dom";
function Activities(props){
    let tableC = props.events.map((e) =>{
        return (<><tr>
            <td> {e.name} </td>
            <td> {e.dates} </td>
            </tr></>)
    });
    return (<>
    <main>
        <table id="activity_table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        
      </tr>
    </thead>
    <tbody>
        {tableC}
    </tbody>          
  </table>
  </main>
  <footer>
      &copy;2021 - Coding Club
  </footer></>)

}
export default Activities;