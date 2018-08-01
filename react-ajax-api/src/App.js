import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
