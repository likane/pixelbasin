import { combineReducers } from 'redux';
import alert from './alert';
import images from './images';


export default combineReducers({
    alert,
    images,
  });