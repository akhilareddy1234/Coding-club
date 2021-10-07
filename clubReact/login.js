import React from "react";
import ReactDOM from "react-dom";
function Login(props){
    return <main>
        <form action="" method="get" class="form-example">
            <div className="email_id">
              <label>Enter your email: </label>
              <input type="email" name="email" id="email" required/>
            </div>
            <br/> 
            <div className="password">
                <label>Enter your password: </label>
                <input type="password" name="password" id="password" required/>
            </div>
            <br/> 
            <button className="login" type="button">Login</button>
        </form>
        
    </main>;
};
export default Login;