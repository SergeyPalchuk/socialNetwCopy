import React from 'react'
import nv from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props)=>{
    return(
        <div className={nv.navBlock}>
            <ul>
                <li><NavLink activeClassName={nv.current} to="/Profile" >Profile</NavLink></li>
                <li><NavLink activeClassName={nv.current} to="/Dialogs">Messages</NavLink></li>
                <li><NavLink activeClassName={nv.current} to="/Users">Users</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;