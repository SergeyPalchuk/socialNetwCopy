import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";

let store = {
    renderPage(){
    
},

  _state : {
    dialogsPage:{
        dialogs:[{id:1, name: 'Vitaliy', lastMessage:'Bobik'},
    {id:2, name: 'Sergey', lastMessage:'Hi mark'}],

    messages:[{dialogId:1, messageText:'hello', messageId:1},
    {dialogId:1, messageText:'hi', messageId:2},
    {dialogId:1, messageText:'How r u', messageId:3},
    {dialogId:1, messageText:'Fine,u?', messageId:4}
],
    newMessageText:''
},
    postPage:{
    posts:[{id:1, text:'Hello world'},{id:2, text:'Hello React'},{id:3, text:'This is my third post'}],
    newPostText:'Some text'}
},
getState(){
    return this._state;
},
addPost(){
        this._state.postPage.posts.push({id:this._state.postPage.posts[this._state.postPage.posts.length-1].id+1, text:this._state.postPage.newPostText})
        this.renderPage(this._state);
        this._state.postPage.newPostText=''
},
addMessage(){
    this._state.dialogsPage.messages.push({dialogId:1, messageText:this._state.dialogsPage.newMessageText, messageId:this._state.dialogsPage.messages[this._state.dialogsPage.messages.length-1]})
    this.renderPage(this._state)
    this._state.dialogsPage.newMessageText=''
},

changeTextOfMessageArea(text){
    this._state.dialogsPage.newMessageText=text
    this.renderPage()
},

changeTextArea(symb){//every new sybmol writed in textarea added in newposttext
    this._state.postPage.newPostText = symb
    this.renderPage(this._state)
},
dispatch(action){
    this._state.postPage = profilePageReducer(this._state.postPage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this.renderPage(this._state)

},
subscribe(callback){
    this.renderPage = callback;
}

}




export default store;