import { connect } from 'react-redux'
import TypeAhead from './type-ahead/TypeAhead';
import searchCountries from '../services/searchCountries';
import { SET_SEARCH_VALUE, SET_COUNTRY_RESULTS } from '../reducers/results';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  searchValue: state.searchValue
})

const searchForCountries = (name) => {
  return (dispatch) => {
    searchCountries(name).then((queryResult) => {
      const searchResults = queryResult.suggest.name_suggest[0].options
                                       .map(option => ({
                                         id: option._id,
                                         name: option._source.name
                                       }));
      dispatch({ type: SET_COUNTRY_RESULTS, searchResults});
    })
  }
}

const mapDispatchToProps = dispatch => ({
  onInputChange: (event) => {
    const searchValue = event.target.value
    dispatch({ type: SET_SEARCH_VALUE, searchValue });
    dispatch(searchForCountries(searchValue))
  },
  onActiveSelect: (countryName) => {
    dispatch({ type: SET_SEARCH_VALUE, searchValue: countryName });
    dispatch(searchForCountries(countryName));
  }
})

const ConnectedTypeAhead = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeAhead)

export default ConnectedTypeAhead
