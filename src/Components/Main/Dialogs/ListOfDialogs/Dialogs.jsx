import React from 'react'
import dl from './Dialogs.module.css'
import Dialog from './SingleDialog.jsx'
import MessagesContainer from '../Messages/MessagesContainer'


const Dialogs = (props)=>{
    
    return(
        <div className={dl.dialogsBlock}>
            <div className={dl.dialogsList}>
                {props.dialogs}
            </div>

            <MessagesContainer />
        </div>
    )
}

export default Dialogs;