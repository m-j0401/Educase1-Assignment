
import React from "react";
import { useNavigate } from "react-router-dom";



const Landing=()=>{
    let navigate=useNavigate();

    return (
        <div id="landing" className="content">

     <h1>Welcome to PopX</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil, porro fuga ex assumenda vel dolor! Accusantium quae iusto voluptas amet a, vitae nulla fugiat corporis expedita totam, libero facilis!</p>

    <button className="accnt-btn" onClick={()=> navigate("/signUp")}>Create Account</button>
    <button className="login-btn" onClick={()=> navigate("/login")}>Already Registered?Login</button>



        </div>
    )
}


export default Landing;