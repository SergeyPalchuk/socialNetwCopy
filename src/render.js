import React from 'react'
import Dialog from './Components/Main/Dialogs/SingleDialog.jsx'

import Message from './Components/Main/Dialogs/SingleMessage.jsx'
import Post from './Components/Main/Profile/Posts/SinglePost.jsx'
import {addPost, changeTextArea} from './Redux/state.jsx'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/state'

export const renderPage = (state)=>{
    let dialogs = state.dialogs.map( el => {return(<Dialog name={el.name} dialogId={el.id} lastMessage={el.lastMessage}/>)})
    let messages = state.messages.map( el => {return(<Message text={el.messageText} messageId={el.messageId}/>  )})
    let posts = state.postPage.posts.map(el=>{return(<Post text={el.text} id={el.id}/>)})

    ReactDOM.render(
      <React.StrictMode>
        <App state={state} userDialogs={dialogs} messages={messages} posts={posts} addPost={addPost} changeTextArea={changeTextArea}/>
      </React.StrictMode>,
      document.getElementById('root')
    );}