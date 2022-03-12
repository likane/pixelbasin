import { SEARCH_IMAGES, GET_IMAGE_BY_ID, SEARCH_FAIL } from '../actions/types';

const initialState = {
    loading: true,
    message: null,
    image: null,
    image_list: [],
    owner: null
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SEARCH_IMAGES:
        return {
        //   ...state,
          image_list: payload,
          message: 'SUCCESS',
          loading: false
        };
    case GET_IMAGE_BY_ID:
        return {
            ...state,
            image: payload,
            message: 'SUCCESS',
            loading: false
        };
    case SEARCH_FAIL:
    return {
        ...state,
        message: payload.message,
        loading: false
    };
      default:
        return state;
    }
  }