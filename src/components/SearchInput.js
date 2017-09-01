import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

class SearchInput extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
    this._searchDelay = null;
  }

  onChange (event) {
    if (this._searchDelay) {
      this._searchDelay = clearTimeout(this._searchDelay);
    }

    const value = event.target.value;

    const { setSearchTerm } = this.props;

    this._searchDelay = setTimeout(
      () => setSearchTerm(value),
      1000
    );
  }

  render () {
    return (
      <div>
        <input onChange={this.onChange} />
      </div>
    );
  }
}

SearchInput.propTypes = {
  setSearchTerm: func.isRequired
};

export default connect(null, { setSearchTerm })(SearchInput);
