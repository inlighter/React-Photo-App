import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function favoriteReducer(state = initialState.images, action) {
  switch(action.type) {
    case types.ADD_IMAGE_TO_FAVORITE:
      return [...state, Object.assign({}, action.image)];
    case types.REMOVE_IMAGE_FROM_FAVORITES:
      return action.storage;
    case types.LOAD_FAVORITES_FROM_STORAGE:
      return action.images;
    default:
      return state;
  }
}
