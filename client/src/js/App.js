import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  componentDidMount () {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render () {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <section className="app-intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        </section>
      </div>
    );
  }
}

export default App;
