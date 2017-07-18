import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const images = [
  {
    id: 0,
    url: 'https://static1.squarespace.com/static/5750405062cd947700302b13/t/5751cd771d07c0c3a3906ce1/1464978809275/treetrunkwmoss.jpg',
    name: 'Treetrunkwmoss',
    author: 'Edward Nolan'
  },
  {
    id: 1,
    url: 'https://wallpaperscraft.com/image/forest_hill_fog_111466_602x339.jpg',
    name: 'Fog',
    author: 'Edward Nolan'
  },
  {
    id: 2,
    url: 'http://ziraff.eu/wp-content/uploads/2017/02/img_wave.jpg',
    name: 'Wave',
    author: 'Edward Nolan'
  },
  {
    id: 3,
    url: 'https://static1.squarespace.com/static/55d23683e4b0232c1e494377/57964e15ff7c5058b1576621/5796569903596eddd7f28ed3/1469470695081/Beach_sunset.jpg?format=750w',
    name: 'Sunset',
    author: 'Edward Nolan'
  },
  {
    id: 4,
    url: 'https://cdn.pixabay.com/photo/2015/10/12/15/08/mussels-984224__340.jpg',
    name: 'Lilaberg',
    author: 'Edward Nolan'
  },
  {
    id: 5,
    url: 'https://media.mnn.com/assets/images/2015/03/forest-path-germany.jpg.653x0_q80_crop-smart.jpg',
    name: 'Forest',
    author: 'Edward Nolan'
  },
  {
    id: 6,
    url: 'https://static1.squarespace.com/static/5375276ae4b0a4617ea6eb7b/t/587c025486e6c0d1e30e82ba/1484522087805/xeh4hvxrkxm-joshua-earle.jpg?format=500w',
    name: 'Ice',
    author: 'Edward Nolan'
  },
  {
    id: 7,
    url: 'https://developer.clarifai.com/static/images/model-samples/focus-005.jpg',
    name: 'Jump',
    author: 'Edward Nolan'
  },
  {
    id: 8,
    url: 'https://media.licdn.com/mpr/mpr/shrinknp_800_800/AAEAAQAAAAAAAAfUAAAAJGI4Mjg4ZDcwLWE1MDUtNDU2My04ODI5LTIzYTM1NzUxZDM5Yg.jpg',
    name: 'Tree',
    author: 'Edward Nolan'
  },
  {
    id: 9,
    url: 'https://media.mnn.com/assets/images/2015/03/forest-path-germany.jpg.653x0_q80_crop-smart.jpg',
    name: 'Forest',
    author: 'Edward Nolan'
  },
  {
    id: 10,
    url: 'https://s-media-cache-ak0.pinimg.com/originals/5f/1e/55/5f1e55c3ee0f0790b4198b5b87a4dbab.jpg',
    name: 'Bear',
    author: 'Edward Nolan'
  },
  {
    id: 11,
    url: 'https://s-media-cache-ak0.pinimg.com/originals/bf/a9/7c/bfa97c3aa4ce48a756c82fc1cddf547b.jpg',
    name: 'Children',
    author: 'Edward Nolan'
  }

];

let currentImgIndex = 0;

class ImageApi {
  static getImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(images.slice(currentImgIndex, currentImgIndex + 4));
        currentImgIndex += 4;
      }, delay);
    });
  }
}

export default ImageApi;
