import React, { Component } from 'react'

import AppFrame from './components/AppFrame/AppFrame.js'
import Banner from './components/Banner/Banner.js'
import Footer, { externalLinkArr, myEmail } from './components/Footer/Footer.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppFrame />
                <Banner />
                {this.props.children}
                <Footer externalLinkArr={externalLinkArr} email={myEmail} />
            </div>
        );
  }
}

export default App
