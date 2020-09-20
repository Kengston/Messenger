import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

//For future purposes 

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Го по пиву пацаны'},
                {id: 2, post: ')'}
            ],
            newPost: 'jopa'
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Гослинг'},
                {id: 2, message: 'Вася'},
                {id: 3, message: 'Путин'}
            ],
            dialogsData: [
                {id: 1, name: 'Гослинг'},
                {id: 2, name: 'Вася'},
                {id: 3, name: 'Путин'},
                {id: 4, name: 'Трамп'},
                {id: 5, name: 'Обама'},
                {id: 6, name: 'Мэнсон'},
                {id: 7, name: 'Антошка'}
            ],
            newMessage: 'ya lomal steklo'

        }
    },
    getState() {
      return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;