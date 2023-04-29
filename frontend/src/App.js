/* global Waev */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleSubmit = () => {
    alert('Data submitted!');
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://cdn-development.waev.com/waev.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new Waev('5c9cfbea-45ff-45a0-8afa-ae1960fad75d', 'FEA6FD19E0BB98EA0C052254B05B71FF', '#testFinal');
    };
  }

  render() {
    return (
        <form id="testFinal">
          <label htmlFor="test1">Test 1:</label>
          <input type="text" id="test1" name="test1" placeholder="Enter test 1 value" />
          <label htmlFor="test2">Test 2:</label>
          <input type="text" id="test2" name="test2" placeholder="Enter test 2 value" />
          <label htmlFor="test3">Test 3:</label>
          <input type="text" id="test3" name="test3" placeholder="Enter test 3 value" />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
    );
  }
}

export default App;
