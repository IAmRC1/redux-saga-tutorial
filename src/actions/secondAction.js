import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, } from '../actionTypes/secondActionTypes';

export const getPosts = () => ({ type: FETCH_DATA_REQUEST })

export const setPosts = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data })

export const setPostsError = (data) => ({ type: FETCH_DATA_ERROR, payload: data })