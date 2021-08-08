let initialState = {
    posts:[{id:1, text:'Hello world'},{id:2, text:'Hello React'},{id:3, text:'This is my third post'}],
    newPostText:'Some text'}

export const profilePageReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_POST':
            let copyState = JSON.parse(JSON.stringify(state))
            copyState.posts.push({id:state.posts[state.posts.length-1].id+1, text:state.newPostText})
            //this.renderPage(this._state);
            copyState.newPostText=''
            return copyState;
        break;
        case 'CHANGE_TEXT_AREA':
            let copyState2 = JSON.parse(JSON.stringify(state))
            copyState2.newPostText = action.symb
            return copyState2;
        break;
    }
        return state;
}

export const addPostAC = ()=>{ // AC - action creator
    return {type:'ADD_POST'}
}
export const changeTextAreaAC = (text)=>{
    return {type:'CHANGE_TEXT_AREA', symb:text}
}