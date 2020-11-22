const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: action.newMessage}]
            };
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage})

