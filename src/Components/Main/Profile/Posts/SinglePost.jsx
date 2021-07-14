import React from 'react'
import ps from './SinglePost.module.css'

const SinglePost = (props)=>{
    return(
        <div className={ps.postBlock}>
            <div className={ps.avatarText}>
                <img src="https://i.ibb.co/nrYpvxK/alegrova-gachi.png" alt="" className={ps.ava} height='50px' className={ps.postAvatar}/>
                <div className={ps.textBlock}>{props.text}</div>
            </div>

            <div className={ps.likesBlock}>Likes: {props.id}</div>
        </div>
    )
}

export default SinglePost;