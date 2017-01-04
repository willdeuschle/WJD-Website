import React, { Component } from 'react';
import logo from './logo.svg';
import AppFrame from './components/AppFrame/AppFrame.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppFrame />
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {this.props.children}
            </div>
        );
  }
}

export default App;
