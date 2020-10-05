const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, photoUrl: '', followed: true, fullName: 'Danil', status: 'Im a teacher'},
        {id: 2, photoUrl: '', followed: false, fullName: 'Vera', status: 'Im a teacher'},
        {id: 3, photoUrl: '', followed: false, fullName: 'George', status: 'Im a teacher'},
        {id: 4, photoUrl: '', followed: false, fullName: 'Paul', status: 'Im a teacher'}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})