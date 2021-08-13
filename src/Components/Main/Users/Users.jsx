import React from 'react'
import us from './Users.module.css'
import SingleUser from './SingleUser'

const Users = (props)=>{
    const followUnfollow = (userId)=>{
        props.followUnfollow(userId)
    }
    let users = props.users.map(el=>{return (<SingleUser userFirstName={el.userFirstName} followUnfollow={followUnfollow} userId={el.userId} followed={el.followed} userSecondName={el.userSecondName} userAvatar={el.userAvatar}/>)})
    return(
    <div className={us.usersBlock}>
        {users}

    </div>)
}

export default Users