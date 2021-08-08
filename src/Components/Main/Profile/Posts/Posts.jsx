import React from 'react'
import psts from './Posts.module.css'


const Posts = (props)=>{
    
    const addPost=()=>{
        props.addPost()
    }
    const changeTextArea= (elem)=>{
        let postText = elem.target.value
        props.changeNewText(postText)
    }

    return(
        <div className={psts.postsMain}>
            <div className={psts.writeBlock}>
                <textarea name="" id="" cols="30" rows="3"  onChange={changeTextArea} value={props.newPostText}></textarea>
                <button onClick={addPost}>Post</button>
            </div>
            <div className={psts.singlePostsBlock}>
                {props.posts}
            </div>

        </div>
    )
}

export default Posts;