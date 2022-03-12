import { setAlert } from './alert';
import axios from 'axios';

import {
    SEARCH_IMAGES,
    SEARCH_FAIL,
  } from './types';

let DEBUG = process.env.REACT_APP_DEBUG
let apikey = process.env.REACT_APP_PXKEY

export const search_images = (values) => async dispatch => {
    let res;
    let searchValue;
  
    if(!values){
      searchValue = 'yellow+flowers'
    } else {
      let trimValue = values.trim()
      searchValue = encodeURIComponent(trimValue)
    }
  
    try {
      axios.get(`https://pixabay.com/api/?key=${apikey}&q=${searchValue}&image_type=photo&safesearch=true&per_page=100`)
        .then(function(response){
          res = response.data.hits
          dispatch({
            type: SEARCH_IMAGES,
            payload: res
          })
        })
        
    } catch (error) {
      if(DEBUG){
        console.error(error)
      }
      dispatch(setAlert('Uh oh! It looks like something went wrong. Please try again later.', 'danger'))
      dispatch({
        type: SEARCH_FAIL,
        payload: error.message
      })
    }
  
  }