import React from 'react'
import Message from './SingleMessage'
import Messages from './Messages'
import { connect } from 'react-redux'

 const mapStateToProps = (state)=>{
    return{
        
    }
}

const mapDispatchToProps = (dispatch)=>{
   return{

   }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default ProfileContainer;