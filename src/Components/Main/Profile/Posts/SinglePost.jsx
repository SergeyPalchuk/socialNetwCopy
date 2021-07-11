import React from 'react'
import ps from './SinglePost.module.css'

const SinglePost = (props)=>{
    return(
        <div className={ps.postBlock}>
            <div className={ps.avatarText}>
                <img src="https://i.ibb.co/nrYpvxK/alegrova-gachi.png" alt="" className={ps.ava} height='50px' className={ps.postAvatar}/>
                <div className={ps.textBlock}>This is text</div>
            </div>

            <div className={ps.likesBlock}>Likes: 999</div>
        </div>
    )
}

export default SinglePost;