import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', err: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // TODO: (Sean) Add more input validation
  validateInput(input) {
    return input.length > 3 && input.length < 10;
  }

  handleClick(e) {
    let { input } = this.state;

    e.preventDefault();

    if (this.validateInput(input)) {
      this.props.cb(input);
      this.setState({ input: '', err: false });
    } else {
      this.setState({ err: true });
    }
  }
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <form className="search">
        <input
          className="search__input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button className="search__submit" onClick={this.handleClick}>
          <div className="search__icon"></div>
        </button>
        {this.state.err ? (
          <div className="search__err">INVALID SEARCH TERM</div>
        ) : (
          ''
        )}
      </form>
    );
  }
}

export default Search;
