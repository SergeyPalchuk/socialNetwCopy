import React from 'react'
import Message from './SingleMessage'
import Messages from './Messages'
import { addMessageAC, changeTextOfMessageAreaAC } from '../../../../Redux/dialogsPageReducer'
import { connect } from 'react-redux'

//  const MessagesContainer = (props)=>{
//     const addMessage =()=>{
//         props.dispatch(addMessageAC())
//     }

//     const changeTextOfMessageArea=(text)=>{
//         props.dispatch(changeTextOfMessageAreaAC(text))
//     }

//     let messages = props.dialogsPage.messages.map( el => {return(<Message text={el.messageText} messageId={el.messageId}/>  )})
//      return(
//         <Messages messages={messages} newMessageText={props.dialogsPage.newMessageText} addMessage={addMessage} changeTextOfMessageArea={changeTextOfMessageArea}/>
//      )
//  }

 const mapStateToProps = (state)=>{
     return{
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages.map( el => {return(<Message text={el.messageText} messageId={el.messageId}/>)})
     }
 }

 const mapDispatchToProps = (dispatch)=>{
    return{
        changeTextOfMessageArea: (text)=>{dispatch(changeTextOfMessageAreaAC(text))},
        addMessage: ()=>{dispatch(addMessageAC())}
    }
}

const MessagesContainer1 = connect(mapStateToProps, mapDispatchToProps)(Messages)

 export default MessagesContainer1;