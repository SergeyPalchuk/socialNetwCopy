import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from './Components/Main/Dialogs/SingleDialog.jsx'
import state from './Redux/state.jsx'
import Message from './Components/Main/Dialogs/SingleMessage.jsx'
import Post from './Components/Main/Profile/Posts/SinglePost.jsx'
import {addPost} from './Redux/state.jsx'

addPost('My new function works')
let dialogs = state.dialogs.map( el => {return(<Dialog name={el.name} dialogId={el.id} lastMessage={el.lastMessage}/>)})
let messages = state.messages.map( el => {return(<Message text={el.messageText} messageId={el.messageId}/>  )})
let posts = state.posts.map(el=>{return(<Post text={el.text} id={el.id}/>)})

ReactDOM.render(
  <React.StrictMode>
    <App userDialogs={dialogs} messages={messages} posts={posts} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
