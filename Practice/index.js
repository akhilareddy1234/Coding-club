import React from "react";
import ReactDOM from "react-dom";
import events from "./event_data.json" // Importing JSON!

let myName = "Akhila";

let tableRows = events.map(function(event){
    return <tr><td>{event.name}</td>
                  <td>{event.dates}</td></tr>;
})
// Create a table using rows from above
let myTable = <table>
    <thead>
        <tr><th>Name</th><th>Date(s)</th></tr>
                </thead>
                <tbody id="ActTable">
                {tableRows}
                </tbody>
    </table>;

// Create contents using table from above
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
    <h3>The number of events is {events.length}</h3>
    {myTable}
  </section>;

ReactDOM.render(contents, document.getElementById("root"));