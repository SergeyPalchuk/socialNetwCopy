import { combineReducers, createStore } from "redux";
import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";

const reducers = combineReducers({dialogsPage:dialogsPageReducer,postPage:profilePageReducer})
const store = createStore(reducers);



export default store;