import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  render() {
    const { onChange, value } = this.props;
    return <input type="text" onChange={onChange} value={value} />;
  }
}
