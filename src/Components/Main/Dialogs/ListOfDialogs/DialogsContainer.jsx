import React from 'react'
import Dialog from './SingleDialog'
import Dialogs from './Dialogs'
import { addMessageAC, changeTextOfMessageAreaAC } from '../../../../Redux/dialogsPageReducer'
import { connect } from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        dialogs: state.dialogsPage.dialogs.map( el => {return(<Dialog name={el.name} dialogId={el.id} lastMessage={el.lastMessage}/>)})
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;