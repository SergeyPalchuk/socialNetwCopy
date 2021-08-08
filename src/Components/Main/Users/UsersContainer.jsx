import React from 'react'
import { connect } from 'react-redux'
import SingleUser from './SingleUser'
import Users from './Users'

const mapStateToProps = (state)=>{
    return({
        usersPage: state.usersPage,
        users: state.usersPage.users.map(el=>{return (<SingleUser userFirstName={el.userFirstName} userSecondName={el.userSecondName} userAvatar={el.userAvatar}/>)})
    })
}
const mapDispatchToProps = (dispatch)=>{
    return({

    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default  UsersContainer