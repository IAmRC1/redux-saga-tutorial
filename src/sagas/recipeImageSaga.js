import { FETCH_IMAGE_REQUEST } from '../actionTypes/thirdActionTypes';
import { setImage, setImageError } from '../actions/thirdAction'
import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchRecipeImage, } from '../api/recipeAPI'
import Toast from '../components/Toast/toast'

export default function* imageWatcher() {
    yield takeLatest(FETCH_IMAGE_REQUEST, handleImage)
}

function* handleImage() {
    try {
        const result = yield call(fetchRecipeImage);
        Toast('success', 'Image fetched');
        // yield call(delay, 1000)  it delays the api call
        // yield delay(10000) it delays the data being placed into reducer
        yield put(setImage(result.data.image));
    } catch (error) {
        const { message } = error.response.data
        Toast('error', error);
        yield put(setImageError(message));
    }
}

//other functions
