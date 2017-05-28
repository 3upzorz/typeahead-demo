import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';

export default class TypeAhead extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
    onActiveSelect: PropTypes.func.isRequired
  };

  static defaultProps = {
    searchValue: '',
    searchResults: []
  }

  render() {
    const {
      onInputChange,
      searchValue,
      searchResults,
      onActiveSelect
    } = this.props;

    return <div className="typeahead">
      <SearchInput onChange={onInputChange} value={searchValue} />
      <SearchResultList onActiveSelect={onActiveSelect}
                        searchResults={searchResults} />
    </div>;
  }
}
