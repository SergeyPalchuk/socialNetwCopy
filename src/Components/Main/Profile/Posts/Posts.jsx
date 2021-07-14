import React from 'react'
import psts from './Posts.module.css'
import Post from './SinglePost'

const Posts = (props)=>{

    const postTextRef = React.createRef();
    const addPost = ()=>{
        let postText = postTextRef.current.value;
        props.addPost(postText);
    }

    return(
        <div className={psts.postsMain}>
            <div className={psts.writeBlock}>
                <textarea name="" id="" cols="30" rows="3" ref={postTextRef}></textarea>
                <button onClick={addPost}>Post</button>
            </div>
            <div className={psts.singlePostsBlock}>
                {props.posts}
            </div>

        </div>
    )
}

export default Posts;