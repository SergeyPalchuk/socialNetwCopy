let initialState = {
    dialogs:[{id:1, name: 'Vitaliy', lastMessage:'Bobik'},
{id:2, name: 'Sergey', lastMessage:'Hi mark'}],

messages:[{dialogId:1, messageText:'hello', messageId:1},
{dialogId:1, messageText:'hi', messageId:2},
{dialogId:1, messageText:'How r u', messageId:3},
{dialogId:1, messageText:'Fine,u?', messageId:4}
],
newMessageText:''}

export const dialogsPageReducer = (state = initialState, action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case 'ADD_MESSAGE':
            stateCopy.messages.push({dialogId:1, messageText:state.newMessageText, messageId:state.messages[state.messages.length-1]})
            //this.renderPage(this._state)
            stateCopy.newMessageText=''
            return stateCopy
        break;
        case 'CHANGE_TEXT_OF_MESSAGE_AREA':
            stateCopy.newMessageText=action.text
            return stateCopy
        break;
    }
    
    return state;
}
export const changeTextOfMessageAreaAC=(text)=>{
    return {type:'CHANGE_TEXT_OF_MESSAGE_AREA', text:text}
}
export const addMessageAC=()=>{
    return {type:'ADD_MESSAGE'}
}
