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
            <Route path="/Profile" render={()=><Profile postPage={props.state.postPage} posts={props.posts} addPost={props.addPost} changeTextArea={props.changeTextArea}/>} />
            <Route path="/Dialogs" render={()=><Dialogs dialogs={props.userDialogs} messages={props.messages}/>} />
        </div>
        </BrowserRouter>
    )
}

export default Main;