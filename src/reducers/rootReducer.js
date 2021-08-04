import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import postReducer from './postReducer'
import recipeImageReducer from './recipeImageReducer'
import movieReducer from './movieReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer,
  recipeImage: recipeImageReducer,
  movie: movieReducer,
})

export default rootReducer;
