
let state = {
    dialogs:[{id:1, name: 'Vitaliy', lastMessage:'Bobik'},
    {id:2, name: 'Sergey', lastMessage:'Hi mark'}],

    messages:[{dialogId:1, messageText:'hello', messageId:1},
    {dialogId:1, messageText:'hi', messageId:2},
    {dialogId:1, messageText:'How r u', messageId:3},
    {dialogId:1, messageText:'Fine,u?', messageId:4}
],

    posts:[{id:1, text:'Hello world'},{id:2, text:'Hello React'},{id:3, text:'This is my third post'}]
}

export function addPost(postText){
    state.posts.push({id:state.posts[state.posts.length-1].id+1, text:postText})
}

export default state;