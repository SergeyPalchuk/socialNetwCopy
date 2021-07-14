import React from 'react'
import dl from './Dialogs.module.css'
import Dialog from './SingleDialog.jsx'
import Message from './SingleMessage.jsx'

const Dialogs = (props)=>{

    return(
        <div className={dl.dialogsBlock}>
            <div className={dl.dialogsList}>
                {props.dialogs}
            </div>

            <div className={dl.messagesBlock}>
                <Message text='hello'/>
                {props.messages}
                <div className={dl.writeArea}>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;