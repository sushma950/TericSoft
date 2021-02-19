import React from "react"
import { Route } from "react-router-dom"

import Home from '../Components/Moviepage'
 import Post from '../Components/Post'
 import Edit from '../Components/Edit'
const Routes=()=>{
    
return(
    <div>
        <Route path='/' exact render={()=><Home />}/>
       
        <Route path = '/dashboard' exact render={()=><Post />}/>
        <Route path = '/dashboard/:id' exact render={(props)=><Edit {...props}/>}/>
            
    </div>
)
    
}



export default Routes