import { FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_ERROR, } from '../actionTypes/thirdActionTypes';

export const getImage = () => ({ type: FETCH_IMAGE_REQUEST })

export const setImage = (data) => ({ type: FETCH_IMAGE_SUCCESS, payload: data })

export const setImageError = (data) => ({ type: FETCH_IMAGE_ERROR, payload: data })