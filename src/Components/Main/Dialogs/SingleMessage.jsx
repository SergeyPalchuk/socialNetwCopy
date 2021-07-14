
import React from 'react'
import sn from './SingleMessage.module.css'

const SingleMessage = (props)=>{
    return(
        <div className={sn.singleMessage}>
            {props.text}

        </div>
    )
}

export default SingleMessage;