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
        // fade in second
        setTimeout(() =>
            this.devDesc.className += ' fade-in-second',
            500
        )

        // fade in last
        setTimeout(() =>
            this.devContact.className += ' fade-in-last',
            700
        )
    }

    render() {
        return (
            <div className='Banner'>
                <ImageCycle />
                <div ref={node => this.devName = node} className='dev-name'>
                    Will Deuschle
                </div>
                <div
                    ref={node => this.devDesc = node}
                    className='dev-desc'
                >
                    Software Engineer
                </div>
                <a
                    href='mailto:wjdeuschle@gmail.com'
                    ref={node => this.devContact = node}
                    className='dev-contact'
                >
                    Get in Touch
                </a>
            </div>
        )
    }
}
