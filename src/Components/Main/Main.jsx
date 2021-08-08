import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import mn from './Main.module.css'
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile"
import DialogsContainer from './Dialogs/ListOfDialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'


const Main = (props)=>{
    return(
        <BrowserRouter>
        <div className={mn.main}>
            <Navbar/>
            <Route path="/Profile" render={()=><Profile/>} />
            <Route path="/Dialogs" render={()=><DialogsContainer/>} />
            <Route path="/Users" render={()=><UsersContainer/>} />
        </div>
        </BrowserRouter>
    )
}

export default Main;