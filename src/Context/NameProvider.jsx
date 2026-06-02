

import React, { useState } from "react";
import { nameContext } from "./nameContext";



const NameProvider=({children})=>{
  let{email,setEmail}=useState();
    return(
        <nameContext.Provider value = {{
           email:email,
           setEmail:setEmail
        }}>
      {children}

        </nameContext.Provider>

    )
}


export default NameProvider