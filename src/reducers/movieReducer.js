import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, } from '../actionTypes/fourthActionTypes';

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_MOVIE_SUCCESS: {
            return {
                ...state,
                loading: false,
                movies: action.payload,
            }
        }
        case FETCH_MOVIE_ERROR: {
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