const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        {id: 1, post: 'Го по пиву пацаны'},
        {id: 2, post: ')'}
    ],
    newPost: 'jopa'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPost
            };
            state.postsData.push(newPost);
            state.newPost = '';
            return state;
        case UPDATE_POST:
            state.newPost = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const updatePostCreator = (text) => ({type: UPDATE_POST, text: text})
export const addPostCreator = () => ({type: ADD_POST})