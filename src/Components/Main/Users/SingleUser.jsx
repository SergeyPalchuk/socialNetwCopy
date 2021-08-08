import React from 'react'
import su from './SingleUser.module.css'

const SingleUser = (props)=>{
    return (
        <div className={su.singleUserBlock}>
            <div className={su.avatarFollowBlock}>
                <div className={su.avatarBlock}><img src={props.userAvatar} alt="" width='100px' height='76px'/></div>
                <div className = {su.followBlock}><button>Follow</button></div>
            </div>

            <div className={su.infoBlock}>
                <div className={su.nameBlock}>{props.userFirstName} </div>
                <div className={su.locationBlock}>London, Great Britan</div>
            </div>
        </div>
    )
}

export default SingleUser
