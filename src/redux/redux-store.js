import {createStore, combineReducers} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import usersReducer from "./User-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer
});

let store = createStore(reducers);

window.store = store

export default store;