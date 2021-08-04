import { all, } from 'redux-saga/effects'
import postWatcher from './postSaga';
import imageWatcher from './recipeImageSaga';
import movieWatcher from './movieSaga';

export default function* RootSaga() {
  yield all([
    postWatcher(),
    imageWatcher(),
    movieWatcher(),
    //firmwareWatcher(),
  ])
}