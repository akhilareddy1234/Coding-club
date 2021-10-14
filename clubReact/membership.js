import React from "react";
import ReactDOM from "react-dom";
/*function Membership(props){
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
*/
class Membership extends React.Component {
  constructor(props){
    super(props);
    this.state = {fname: "", lname: "", mailid:"", pswrd:"",skill:"",dialogClass:""}
  }
  submitApplication() {
    // In a real application we'd actually send data to a server here
    // But all we'll do here is show the welcome/thanks dialog
    this.setState({ dialogClass: "show" })
  }
  
  render(){
    let message = null;
    if (this.state.pswrd.length < 8 ) {
        message = <p>Password too short </p>
    } else { // Everything is good create a welcome message
        message = <p>Welcome <em>{this.state.fname}</em>,{" "}
        your email is <em>{this.state.mailid}</em>,{" "}
        your skill level is <em>{this.state.skill}</em></p>
    }
    return (
      <main>
        <header>
          <h1>Membership</h1>
        </header>
        <h2>Apply Now</h2>
        <section id ="membership">
          <label>First Name:</label>{" "}
          <input required minLength = "6" maxLength = "30" id = "fname" type="text" value={this.state.fname} onInput = {(event)=> this.setState({fname : event.target.value})}></input>
          <label>Last Name:</label>{" "}
          <input required minLength = "6" maxLength = "30" id = "lname" type="text" value={this.state.lname} onInput = {(event)=> this.setState({lname : event.target.value})}></input>
          <label>Mail:</label>{" "}
          <input required minLength = "1" maxLength = "30" id = "mailid" type="text" value={this.state.mailid} onInput = {(event)=> this.setState({mailid : event.target.value})}></input>
          <label>Password:</label>{" "}
          <input required minLength = "6" maxLength = "30" id = "pswrd" type="password" value={this.state.pswrd} onInput = {(event)=> this.setState({pswrd : event.target.value})}></input>
          <label>Skill:</label>
          <select required id = "skill" value={this.state.skill} onInput={(event) => this.setState({ skill: event.target.value })}>

          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select> 
        <button onClick={this.submitApplication.bind(this)}>Sign me up!</button>      
        </section>
        <section id="ThanksDialog" className={`wrap ${this.state.dialogClass}`}>
          <div className="wrapcenter">
            <h3>Thanks for Signing Up</h3>
            {message}
            <button onClick={(event) => this.setState({ dialogClass: "hide" })}>
              Close
            </button>
          </div>
        </section>
        
      </main>
    );
  }
}
export default Membership;