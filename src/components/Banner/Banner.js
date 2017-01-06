import React, { Component } from 'react'

import './Banner.css'

export default class Banner extends Component {
    componentDidMount() {
        // fade in
        setTimeout(() =>
            this.devName.className += ' fade-in',
            300
        )
    }

    render() {
        return (
            <div className='Banner'>
                <div ref={(node) => this.devName = node} className='dev-name'>
                    Will Deuschle
                </div>
            </div>
        )
    }
}
