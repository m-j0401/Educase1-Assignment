

import React, { useState } from "react";
import { nameContext } from "./nameContext";



const NameProvider=({children})=>{
  let[name,setName]=useState('');
    return(
        <nameContext.Provider value = {{
           name:name,
           setName:setName
        }}>
      {children}

        </nameContext.Provider>

    )
}


export default NameProvider