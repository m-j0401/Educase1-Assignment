
import React from "react";
import Landing from "./Components/Landing";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import {Routes,Route} from "react-router-dom";
import NameProvider from "./Context/NameProvider";
import   "./App.css"

const App=()=>{

  return(
    <div>
      <NameProvider>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </NameProvider>
    

    </div>
  )
}


export default App
