import React from "react";
import ReactDOM from "react-dom";
import events from './event_data.json'

class AdminActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            dates:"",
            eventsArray:events
        };
    } 
    addChoice(event)
    {
        event.preventDefault()
            let arr = {}
            arr.name = this.state.name;
            arr.dates = this.state.dates;
            let tempArr = this.state.eventsArray;
            tempArr.push(arr);
            this.setState({eventsArray: tempArr})
    }
    deleteRow(event,o){
        event.preventDefault();
        let temp =this.state.eventsArray
        let index =temp.indexOf(o);
        temp.splice(index, 1);
        this.setState({eventsArray:temp})       
    }
    render()
    {
        let eventsArray = this.state.eventsArray;
        return (<><header><h1>Admin Activity Page</h1></header>
            <main>
                <section id="AdminActivity">
                <label>Name : </label>
                <input type="text"
                onInput={(event) => this.setState({ name: event.target.value })} 
                />
                <label>Date : </label>
                <input type="text"
                // value={this.state.date}
                onInput={(event) => this.setState({ dates: event.target.value })} 
                />
                <button onClick={this.addChoice.bind(this)}>Add</button></section>
                <h3>Activity Schedule</h3>
                <table>
                        <tr>
                            <th>Button</th>
                            <th>Name</th>
                            <th>Dates</th>
                        </tr>
                    
                    <tbody id="table">
                    {eventsArray.map((item, idx) => (
                                <tr key={idx}>
                                    <td><button onClick={(event) => this.deleteRow(event, item)}>Delete</button></td>
                                    <td>{item.name}</td>
                                    <td>{item.dates}</td>
                                </tr>))}

                    </tbody>
                </table>
            </main></>)
    }

}

export default AdminActivity;






