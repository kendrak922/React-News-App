import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Articles';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Header></Header>
    <Article></Article>
      </div>
    );
  }
}

export default App;
