import {
  TOGGLE_STOCK,
  LOAD_SEARCH_RESULT
} from '../constants/ActionTypes';

const initialState = {
  searchText: '',
  isStocked: false,
};


export default function categories(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STOCK:
      return {
        ...state,
        isStocked: !state.isStocked
      };

    case LOAD_SEARCH_RESULT:
      return {
        ...state,
        searchText: action.text
      }

    default:
      return state
  }
}