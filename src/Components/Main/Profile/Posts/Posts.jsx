import React from 'react'
import psts from './Posts.module.css'
import Post from './SinglePost'

const Posts = (props)=>{
    return(
        <div className={psts.postsMain}>
            <div className={psts.writeBlock}>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Post</button>
            </div>
            <div className={psts.singlePostsBlock}>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}

export default Posts;