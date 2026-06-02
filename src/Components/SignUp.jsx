
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { nameContext } from "../Context/nameContext";



const SignUp=()=>{
    let{setEmail}=useContext(nameContext)
    let navi=useNavigate()
    let signup_data={
        name:useRef(),
        phoneNum:useRef(),
        email:useRef(),
        pass:useRef(),

    }
let{name,phoneNum,email,pass}=signup_data;
   function handleSignUp(e){
   e.preventDefault();
   if(!name.current.value || !phoneNum.current.value || !email.current.value || !pass.current.value)
   {
    alert("All * fields required!")
    return;
   }
   setEmail(email.current.value)
   navi("/profile")
   }
 
 
 
 return  (<div className="signup-page">
    <div className="signup-card">
   <h3>Create Your PopX account</h3>
 <form onSubmit={handleSignUp}>
    
    
    <label htmlFor="name">Full Name</label>
                <br/>
                <input type="text" id="name" ref={name} required/>
                
                <br/>
      <label htmlFor="phone">Phone Number</label>
                <br/>
                <input type="number" id="phone" ref={phoneNum} required/>
                <br/>
      <label htmlFor="email">Email address</label>
                <br/>
                <input type="email" id="email" ref={email} required/>
                <br/>
       <label htmlFor="pass">Password</label>
                <br/>
                <input type="password" id="pass" ref={pass} required/>
                <br/>
          <label htmlFor="company">Company</label>
                <br/>
                <input type="text" id="company" />
                <br/>
            <label>Are You an Agency?</label>
                <br/>
            <label htmlFor="Yes">Yes</label>
        <input type="radio" name="agency" />
        <label htmlFor="No">No</label>
        <input type="radio" name="agency" />
        <br/>
        <button  className="accnt-btn"   type="submit">Create Account</button>

 </form>
 </div>
    </div>)
}

export default SignUp