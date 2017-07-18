import * as types from './actionTypes';
import ImageApi from '../api/mockImageApi';

let storage = [];

function updateStorage() {
  sessionStorage.setItem('Favorites', JSON.stringify(storage));
}

export function getItemsFromStorage() {
  return {type: types.LOAD_FAVORITES_FROM_STORAGE, images: JSON.parse(sessionStorage.getItem('Favorites') || '[]')};
}


export function loadImagesSuccess(images) {
  return {type: types.LOAD_IMAGES_SUCCESS, images};
}


export function addImageToFavorite(image) {
  storage.push(image);
  updateStorage();
  return {type: types.ADD_IMAGE_TO_FAVORITE, image};
}

export function removeImageFromFavorites(image) {
  storage = storage.filter(img => img.id !== image.id);
  updateStorage();
  return {type: types.REMOVE_IMAGE_FROM_FAVORITES, storage};
}

export function loadImages() {
  return function (dispatch) {
    return ImageApi.getImages().then(images => {
      dispatch(loadImagesSuccess(images));
    }).catch(error => {
      throw(error);
    });
  };
}

