import React from "react";
import ReactDOM from "react-dom";
function Menu(props){
    return <nav>
    <ul>
        {props.role == "user" ? <li className={props.show == 'home' ? 'active' : ''}><a href="./index.html">Home</a></li> : ""}
        {props.role == "guest" ? <li className={props.show == 'login' ? 'active' : ''}><a href="./login.html">Login</a></li> : ""}
        {props.role == "user" ? <li className={props.show == 'activities' ? 'active' : ''}><a href="./club_activities.html">Activities</a></li> : "" }
        {props.role == "guest" ? <li className={props.show == 'membership' ? 'active' : ''}><a href="./application_page.html">Membership</a></li> : ""}
        {props.role == "user" ? <li className={props.show =='logout' ? 'active' : ''}><a>Logout</a></li> : ""}
    </ul>
</nav>;
}
export default Menu;