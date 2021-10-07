import React from "react";
import ReactDOM from "react-dom";
function Membership(props){
    return (<><form id="membership">
    <div className = "container">
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" required />
      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" required />
      <label htmlFor="mailid">Email id:</label>
      <input type="email" id="mailid" name="mailid" required />
      <label htmlFor="pswrd">Password</label>
      <input type="password" id="pswrd" name="pswrd" minLength="8" maxLength="12" required /> 
      <label htmlFor="skill">Choose your skill level:</label>
      
    
      <input type="submit" id="signid" value="Sign me up!" />
    </div>
    </form></>);
}
export default Membership;