import React, { Component } from 'react'

import logo from './logo.svg'
import AppFrame from './components/AppFrame/AppFrame.js'
import Banner from './components/Banner/Banner.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppFrame />
                <Banner />
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                {this.props.children}
            </div>
        );
  }
}

export default App
