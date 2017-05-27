export const SET_COUNTRY_RESULTS = '@@SEARCH_REDUCER/SET_COUNTRY_RESULTS';
export const SET_SEARCH_VALUE = '@@SEARCH_REDUCER/SET_SEARCH_VALUE';
const initialState = {
  searchResults: [],
  searchValue: ''
};

export default function results(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRY_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults
      }
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue
      }
    default:
      return state;
  }
}
