import React, { Component } from 'react'

import Banner from '../Banner/Banner'
import About from '../About/About'
import TechStack from '../TechStack/TechStack'
import technologies from '../../static/techstack.js'


export default class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Banner />
                <About />
                <TechStack blocks={technologies} />
            </div>
        )
    }
}
