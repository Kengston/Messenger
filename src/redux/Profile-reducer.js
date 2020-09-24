const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        {id: 1, post: 'Го по пиву'},
        {id: 2, post: ')'}
    ],
    newPost: 'jopa'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, post: state.newPost}],
                newPost: ''
            };
        case UPDATE_POST:
            return {...state, newPost: action.text};
        default:
            return state;
    }
}

export default profileReducer;

export const updatePostCreator = (text) => ({type: UPDATE_POST, text: text})
export const addPostCreator = () => ({type: ADD_POST})