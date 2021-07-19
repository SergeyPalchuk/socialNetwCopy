import React from 'react'
import pr from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = (props)=>{
    return(
        <div className={pr.profile}>
            <div className={pr.infoBlock}>
                <div className={pr.avatar}>
                    <img src="https://i.ibb.co/nrYpvxK/alegrova-gachi.png" alt="" height='100px' />
                </div>
                <div className={pr.textBlock}>
                    <div className={pr.name}>Name</div>
                    <div className={pr.description}>About me</div>                
                </div>
            </div>

            <Posts postPage={props.postPage} posts={props.posts} addPost={props.addPost} changeTextArea={props.changeTextArea}/>
        </div>
    )
}

export default Profile;