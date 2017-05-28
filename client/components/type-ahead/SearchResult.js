import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchResultList extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.name);
  }

  render() {
    const { name } = this.props;
    return <div className="typeahead__search-result">
      <a onClick={this.onClick} href="#">
        {name}
      </a>
    </div>
  }
}
