import { connect } from 'react-redux'
import TypeAhead from './TypeAhead';
import searchCountries from '../../services/searchCountries';
import { SET_SEARCH_VALUE, SET_COUNTRY_RESULTS } from '../../reducers/results';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  searchValue: state.searchValue
})

const mapDispatchToProps = dispatch => ({
  onInputChange: (event) => {
    const searchValue = event.target.value
    dispatch({ type: SET_SEARCH_VALUE, searchValue });
    dispatch((dispatch) => {
      searchCountries(searchValue).then((searchResults) => {
        dispatch({ type: SET_COUNTRY_RESULTS, searchResults});
      })
    })
  }
})

const ConnectedTypeAhead = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeAhead)

export default ConnectedTypeAhead
