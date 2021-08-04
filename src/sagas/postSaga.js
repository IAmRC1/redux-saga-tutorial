import { FETCH_DATA_REQUEST } from '../actionTypes/secondActionTypes';
import { setPosts, setPostsError } from '../actions/secondAction'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPosts, } from '../api/postsAPI'
import Toast from '../components/Toast/toast'

export default function* postWatcher() {
    yield takeLatest(FETCH_DATA_REQUEST, handlePosts)
}

function* handlePosts() {
    try {
        const result = yield call(fetchPosts);
        Toast('success', 'Data fetched');
        // yield call(delay, 1000)  it delays the api call
        // yield delay(10000) it delays the data being placed into reducer
        yield put(setPosts(result.data));
    } catch (error) {
        const { message } = error.response.data
        Toast('error', error);
        yield put(setPostsError(message));
    }
}

//other functions
