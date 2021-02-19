import React from 'react'
import { Route, Switch } from "react-router-dom"
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'
import Register from '../Components/Register'
//import PrivateRoutes from "./PrivateRoutes"
//import Home from './Home'
//import FlatDetail from './FlatDetail'
import Home from '../Components/Moviepage'
import Post from '../Components/Post'
 import Edit from '../Components/Edit'
function Routes() {
    return (
        <>
            {/* <Route path="/" render={() => <Navbar />} /> */}
            <Switch>
                <Route path="/" exact render={() => <Register />} />
                <Route path="/Login" render={(props) => <Login {...props} />} />
                <Route path="/Register" render={() => <Register />} />
                <Route path="/admin" exact render={() => <Home />} />
                <Route path = '/dashboard' exact render={()=><Post />}/>
        <Route path = '/dashboard/:id' exact render={(props)=><Edit {...props}/>}/>
            
            </Switch>
        </>
    )
}
export default Routes;