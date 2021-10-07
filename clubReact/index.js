import events from "./event_data.json" // Importing JSON!
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu"; // my new menu component
import Home from "./home";
import Login from "./login";
import Membership from "./membership";
import Activities from "./activities";


class App extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables:
        // *role* is for RBAC == "role based access control"
        // we have "guest", "user", and "admin"
        //
        this.state = { role: "user", show: "home" }; 
    }


    render() {
        let content ;
        // statements/logic to set the content variable based on state
        if(this.state.show=="home")
        {
            content = <Home />;
        }
        else if(this.state.show=="login"){
            content=<Login />;
        }
        else if(this.state.show == "activities"){
            content = <Activities events={events} />;
        }
        else if(this.state.show == "membership"){
            content = <Membership />;
        }
        
        return (
            <>
                <Menu role={"user"} show={this.state.show} />
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));