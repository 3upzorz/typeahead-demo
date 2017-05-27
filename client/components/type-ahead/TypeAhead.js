import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export default class TypeAhead extends Component {
  static propTypes = {
    onInputChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired
  };

  static defaultProps = {
    searchValue: '',
    searchResults: []
  }

  render() {
    const {
      onInputChange,
      searchValue,
      searchResults
    } = this.props;
    
    return <SearchInput onChange={onInputChange} value={searchValue} />;
  }
}
