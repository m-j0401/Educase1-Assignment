
import React, { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { nameContext } from "../Context/nameContext";



const LogIn=()=>{
     let{name,setName}=useContext(nameContext)
    let navi=useNavigate();
    let dataa={
        email:useRef(),
        password:useRef()
    }
let{email,password}=dataa;

function handleSubmit(e)
{
    e.preventDefault();
    if(!email.current.value || !password.current.value)
    {
        alert("Enter All value");
        return;
    }
    setName(email.current.value)

  navi("/profile");
}
    return(
        <div className="login-page">
            <div className="login-container">
            <h1>PopX Account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, labore!</p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <label htmlFor="email">Email address  </label>
                <br/>
                <input type="email" id="email" ref={email}  placeholder="Enter Email address" required/>
                </div>
                <br/>
                <div className="input-group">
                
                <label htmlFor="pass">Password</label>
                
                <br/>
                <input type="password" id="pass" ref={password} className="input-group" placeholder="Enter Password" required/>
                </div>
                <br/>
               <button className="login-btn" type="Submit">LogIn</button>
            </form>

        </div>
        </div>
    )
}

export default LogIn