import React from 'react';

class Activities extends React.Component{
    constructor(props){
        super(props);
        this.state = { activities:[]}
    }

componentDidMount() {
      
    fetch('/activities').then(res=>res.json()).then((activities)=>{
        this.setState({
            ...this.state,
            activities: activities
        })
    })
}

render(){
    console.log(this.state.activities);
    let tableRows = this.state.activities.map((events1) => {
        return <tr>
                  <td>{events1.name}</td>
                  <td>{events1.dates}</td>
              </tr>;
    })
      // Create a table using rows from above
     let myTable = <table>
                       <thead>
                           <tr>
                               <th>Name</th><th>Date(s)</th></tr>
                         </thead>
                            <tbody id="ActTable">
                             {tableRows}
                            </tbody>
                     </table>;
    return(
            <>
                <div id="actvitytable">
                      <h1>Club Activities </h1>
           
                    <h2>Activities Scheduled</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> 
                 <h2> Activity Table fetched from server</h2>
                      {myTable}
                </div>
            </>
    );
}

}

export default Activities