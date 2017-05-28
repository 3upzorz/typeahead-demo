import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';

export default class SearchResultList extends Component {
  static propTypes = {
    onActiveSelect: PropTypes.func.isRequired,
    searchResults: PropTypes.array
  }

  static defaultProps = {
    searchResults: []
  }

  render() {
    const { onActiveSelect, searchResults } = this.props;
    return <div className="typeahead__search-result-list">
      {searchResults.map(result => <SearchResult name={result.name}
                                                 key={result.id}
                                                 onSelect={onActiveSelect} />)}
    </div>;
  }
}
