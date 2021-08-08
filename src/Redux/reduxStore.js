import { combineReducers, createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { usersPageReducer } from "./usersPageReducer";

const reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    postPage:profilePageReducer,
    usersPage: usersPageReducer,
})
const store = createStore(reducers);



export default store;