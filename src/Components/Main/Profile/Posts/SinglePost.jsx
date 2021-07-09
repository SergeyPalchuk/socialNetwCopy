import React from 'react'
import ps from './SinglePost.module.css'

const SinglePost = (props)=>{
    return(
        <div className={ps.postBlock}>
            <div className={ps.avatarText}>
                <img src="" alt="" />
            </div>

            <div className={ps.likesBlock}></div>
        </div>
    )
}

export default SinglePost;