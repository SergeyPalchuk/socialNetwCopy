import React from 'react'
import { connect } from 'react-redux'
import SingleUser from './SingleUser'
import Users from './Users'
import { followAC } from '../../../Redux/usersPageReducer'

const mapStateToProps = (state)=>{
    return({
        usersPage: state.usersPage,
        users: state.usersPage.users
    })
}
const mapDispatchToProps = (dispatch)=>{
    return({
        followUnfollow:(userId)=>dispatch(followAC(userId))
    })
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default  UsersContainer