import "./Register.css"
import { Link } from "react-router-dom";
function Register(){
    return(
    <div className="register">
        <h1 className="step">
        Create your PopX account
        </h1>
        <div div class="register-group">
        <label for="name">Full Name<span style={{color:"red"}}>*</span></label>
        <input type="name" id="name" name="name" placeholder="Enter your name"/>
        <label for="phone">Phone Number<span style={{color:"red"}}>*</span></label>
        <input type="phone" id="phone" name="phone" placeholder="Enter your phone number"/>
        <label for="email">Email Address<span style={{color:"red"}}>*</span></label>
        <input type="email" id="email" name="email" placeholder="Enter email address"/>
        <label for="password">Password<span style={{color:"red"}}>*</span></label>
        <input type="password" id="password" name="password" placeholder="Enter password"/>
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" placeholder="Enter company name"/>
        <p>Are you an Agency?<span style={{color:"red"}}>*</span></p>
        </div>
        <div className="box">
        <div className="radio">
          <input
            name="question"
            type="radio"
            value="yes"
          />
          Yes
        </div>
        
        <div className="radio">
          <input
          name="question"
            type="radio"
            value="no" 
          />
          No
        </div>
        </div>
        
        <Link to='/User'>
       <button className="btn">Create Account</button>
       </Link>
          </div>  
    );

}

export default Register;