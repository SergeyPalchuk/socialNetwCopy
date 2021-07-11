import React from 'react'
import dl from './Dialogs.module.css'

const Dialogs = (props)=>{
    return(
        <div className={dl.dialogsBlock}>
            <div className={dl.dialogsList}>
                List of dialogs
            </div>

            <div className={dl.messages}>
                Here messages
            </div>
        </div>
    )
}

export default Dialogs;