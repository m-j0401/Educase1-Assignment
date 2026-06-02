
import React, { useContext } from "react";

import image from "../assests/Imgs.png"
import { nameContext } from "../Context/nameContext";




const Profile=()=>{

let{email}=useContext(nameContext)
    return(
        <div>
     <header>
        Account Setting
     </header>
     <div>
   <img src={image} alt="user profile"/>
   <h3>Name</h3>
   <p>{email}</p>


     </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia nihil eos, delectus voluptatibus amet possimus id? Corrupti vitae nostrum doloribus rerum asperiores eum ex quia pariatur. Aliquid, ex doloribus?</p>

        </div>
    )
}

export default Profile;