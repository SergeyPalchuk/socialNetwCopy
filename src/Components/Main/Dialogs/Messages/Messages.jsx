import React from 'react'
import ms from './Messages.module.css'

 const Messages = (props)=>{
    const changeTextOfMessageArea=(elem)=>{
        let txt = elem.target.value;
        props.changeTextOfMessageArea(txt)
    }

    const addMessage = ()=>{
        props.addMessage()
    }

     return(
        <div className={ms.messagesBlock}>
                {props.messages}
                <div className={ms.writeArea}>
                    <textarea name="" id="" cols="30" rows="3" onChange={changeTextOfMessageArea} value={props.newMessageText}></textarea>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
     )
 }

 export default Messages;