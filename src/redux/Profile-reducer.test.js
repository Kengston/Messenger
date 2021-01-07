import profileReducer, {addPostCreator, deletePost} from "./Profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
    postsData: [
        {id: 1, post: 'Го по пиву'},
        {id: 2, post: ')'}
    ]
}

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostCreator('jopa-popa')

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(3)
});

it('message of new posts should be correct', () => {
    //1. test data
    let action = addPostCreator('jopa-popa')

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData[2].post).toBe("jopa-popa")
});

it('after deleting lenght of messages shouldt be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(10000)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(2)
});

