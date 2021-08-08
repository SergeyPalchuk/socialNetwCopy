const initialState = {
    users: [
        {userId:1, userFirstName: 'Igor', userLastName: 'Popov', userAge:24, followed:[], userDescription:'I like cook', userAvatar:'https://www.truck.man.eu/ru/media/nresources/nimages/man_logo_batch.svg'},
        {userId:2, userFirstName: 'Sergey', userLastName: 'Popov', userAge:21, followed:[], userDescription:'I like cook', userAvatar:'https://images.theconversation.com/files/399816/original/file-20210510-5797-xqoxsr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'},
        {userId:3, userFirstName: 'Vitaliy', userLastName: 'Semenov', userAge:29, followed:[], userDescription:'I like cook', userAvatar:'https://www.mining-technology.com/wp-content/uploads/sites/8/2019/01/Gold-mine.jpg'}
    ]
}

export const usersPageReducer = (state = initialState, action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case 'FOLLOW':
        break;
    }

    return stateCopy
}