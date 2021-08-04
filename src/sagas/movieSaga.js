import { FETCH_MOVIE_REQUEST } from '../actionTypes/fourthActionTypes';
import { setMovie, setMovieError } from '../actions/fourthAction'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchMovie, } from '../api/movieAPI'
import Toast from '../components/Toast/toast'

export default function* postWatcher() {
    yield takeLatest(FETCH_MOVIE_REQUEST, handleMovies)
}

function* handleMovies() {
    try {
        const result = yield call(fetchMovie);
        Toast('success', 'Movie fetched');
        // yield call(delay, 1000)  it delays the api call
        // yield delay(10000) it delays the data being placed into reducer
        yield put(setMovie(result.data.docs));
    } catch (error) {
        console.log('error.response', error.response)
        if(typeof error.response.data === 'object'){
            const { message } = error.response.data
            Toast('error', message);
            yield put(setMovieError(message));
            return;
        }
        const { data } = error.response
        Toast('error', data);
        yield put(setMovieError(data));
    }
}

//other functions
