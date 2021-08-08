import React from 'react'
import pr from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer'

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

            <PostsContainer postPage={props.postPage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;