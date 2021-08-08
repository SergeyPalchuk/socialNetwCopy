import React from 'react'
import sn from './SingleDialog.module.css'
import { NavLink } from 'react-router-dom'

const SingleDialog = (props)=>{
    let path = '/dialogs/'+props.dialogId;
    return(
        <div className={sn.dialogItem}>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/19/cd/fb/55/hi-my-name-is-emily-and.jpg" alt="" className={sn.avatar} height='50px' width='50px'/>
            <div className={sn.dialogInfo}>
                <div className={sn.nameStatus}>
                    <NavLink to={path}>{props.name} </NavLink>
                </div>

                <div className={sn.lastMessage}>
                    {props.lastMessage}
                </div>
            </div>
        </div>
    )
}

export default SingleDialog;