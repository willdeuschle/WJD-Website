import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import About from '../About/About'


export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Banner />
                <About />
            </div>
        )
    }
}
