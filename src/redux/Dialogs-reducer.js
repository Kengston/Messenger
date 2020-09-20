const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageCreator = (newText) => ({type: UPDATE_MESSAGE, newText: newText})

