import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, } from '../actionTypes/secondActionTypes';

const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        }
        case FETCH_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}