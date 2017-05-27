import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import ConnectedTypeAhead from './type-ahead/ConnectedTypeAhead';

export default class App extends Component {

  render() {
    return <div className="page">
       <h1>Typeahead</h1>
       <ConnectedTypeAhead />
     </div>;
  }
}
