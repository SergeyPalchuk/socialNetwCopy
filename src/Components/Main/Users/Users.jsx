import React from 'react'
import us from './Users.module.css'

const Users = (props)=>{
    return(
    <div className={us.usersBlock}>
        {props.users}

    </div>)
}

export default Users