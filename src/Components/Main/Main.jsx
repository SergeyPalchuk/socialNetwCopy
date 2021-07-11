import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import mn from './Main.module.css'
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"

const Main = (props)=>{
    return(
        <BrowserRouter>
        <div className={mn.main}>
            <Navbar/>
            <Route path="/Profile" component={Profile} />
            <Route path="/Dialogs" component={Dialogs} />
        </div>
        </BrowserRouter>
    )
}

export default Main;