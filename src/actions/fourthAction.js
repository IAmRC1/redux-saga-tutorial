import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, } from '../actionTypes/fourthActionTypes';

export const getMovie = () => ({ type: FETCH_MOVIE_REQUEST })

export const setMovie = (data) => ({ type: FETCH_MOVIE_SUCCESS, payload: data })

export const setMovieError = (data) => ({ type: FETCH_MOVIE_ERROR, payload: data })