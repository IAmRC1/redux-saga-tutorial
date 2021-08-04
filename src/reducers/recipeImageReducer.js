import { FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_ERROR, } from '../actionTypes/thirdActionTypes';

const initialState = { 
    loading: false,
    image: '',
    error: ''
}

export default function recipeImageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_IMAGE_SUCCESS: {
            return {
                ...state,
                loading: false,
                image: action.payload,
            }
        }
        case FETCH_IMAGE_ERROR: {
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