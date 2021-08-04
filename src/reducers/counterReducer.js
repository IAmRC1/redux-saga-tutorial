import { INCREMENT, DECREMENT } from '../actionTypes/firstActionTypes';

const initialState = { 
    value: 23,
}

export default function counterReducer(state = initialState, action) {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        default: 
            return state;
    }
};