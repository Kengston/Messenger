import {createStore, combineReducers} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import usersReducer from "./User-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store

export default store;