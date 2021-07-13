import React from 'react'
import dl from './Dialogs.module.css'
import Dialog from './SingleDialog.jsx'

const Dialogs = (props)=>{

    return(
        <div className={dl.dialogsBlock}>
            <div className={dl.dialogsList}>
                {props.dialogs}
            </div>

            <div className={dl.messages}>
                Here messages
            </div>
        </div>
    )
}

export default Dialogs;