import {renderPage} from './../render.js'

let state = {
    dialogs:[{id:1, name: 'Vitaliy', lastMessage:'Bobik'},
    {id:2, name: 'Sergey', lastMessage:'Hi mark'}],

    messages:[{dialogId:1, messageText:'hello', messageId:1},
    {dialogId:1, messageText:'hi', messageId:2},
    {dialogId:1, messageText:'How r u', messageId:3},
    {dialogId:1, messageText:'Fine,u?', messageId:4}
],
    postPage:{
    posts:[{id:1, text:'Hello world'},{id:2, text:'Hello React'},{id:3, text:'This is my third post'}],
    newPostText:'Some text'}
}
//wod400
export function addPost(){
    state.postPage.posts.push({id:state.postPage.posts[state.postPage.posts.length-1].id+1, text:state.postPage.newPostText})
    renderPage(state);
    state.postPage.newPostText=''
}

export function changeTextArea(symb){
    state.postPage.newPostText = symb
    renderPage(state)
}

export default state;