import React, { Component } from 'react'

import ImageCycle from '../ImageCycle/ImageCycle'
import './Banner.css'


export default class Banner extends Component {
    componentDidMount() {
        // fade in first
        setTimeout(() =>
            this.devName.className += ' fade-in-first',
            300
        )
        // fade in last
        setTimeout(() =>
            this.devDesc.className += ' fade-in-last',
            500
        )
    }

    render() {
        return (
            <div className='Banner'>
                <ImageCycle />
                <div ref={(node) => this.devName = node} className='dev-name'>
                    Will Deuschle
                </div>
                <div ref={(node) => this.devDesc = node} className='dev-desc'>
                    Software Engineer
                </div>
            </div>
        )
    }
}
