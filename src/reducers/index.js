import { combineReducers } from 'redux';
import images from './imageReducer';
import favorites from './favoriteReducer';

const rootReducer = combineReducers({
  images,
  favorites
});

export default rootReducer;
