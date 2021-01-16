import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, post: 'Го по пиву'},
        {id: 2, post: ')'}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, post: action.newPost}]
            };
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case DELETE_POST:
            return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos }}
        default:
            return state;
    }
}

export default profileReducer;

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostCreator = (newPost) => ({type: ADD_POST, newPost})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})