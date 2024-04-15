import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
function Home(){
    return (
        <div className="main">
            
                <h1 className="text">Welcome to PopX</h1> 
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Link to= '/Register'>
                <button className="button1">Create account</button>
                </Link>
                <Link to='/Login'>
                <button className="button2" >Already Registered? Login </button>
                </Link>
        </div>    
        )};
        
export default Home;