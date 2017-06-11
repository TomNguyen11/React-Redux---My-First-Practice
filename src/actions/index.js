import * as types from '../constants/ActionTypes'

export const toggleStock = () => (
  { 
    type: types.TOGGLE_STOCK,
  }
);

export const loadSearchResult = text => (
  {
    type: types.LOAD_SEARCH_RESULT,
    text
  }
)