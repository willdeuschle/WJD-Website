import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import About from '../About/About'
import TechStack from '../TechStack/TechStack'


export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Banner />
                <About />
                <TechStack />
            </div>
        )
    }
}
