import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
function Login(){
return (
    <div className="login">
    <h2 className="intro">
    Signin to your PopX account
    </h2>
    <p className="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </p>
    <div class="inputs-groups">
    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" placeholder="Enter email address"/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password"/>
    <Link to='/Register'><button className="btn">Login</button></Link>
    </div>
        


</div>
)
};
export default Login;