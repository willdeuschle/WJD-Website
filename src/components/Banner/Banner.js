import React, { Component } from 'react'

import ImageCycle from '../ImageCycle/ImageCycle'
import Overlay from '../Overlay/Overlay'
import './Banner.css'


export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactOverlay: false,
        }
        this.toggleOverlay = this.toggleOverlay.bind(this)
        this.removeOverlay = this.removeOverlay.bind(this)
        this.escapeOverlay = this.escapeOverlay.bind(this)
    }

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

        this.escKey = addEventListener('keyup', this.escapeOverlay)
    }

    componentWillUnmount() {
        removeEventListener('keyup', this.escapeOverlay)
    }

    // remove overlay if the escape key is hit
    escapeOverlay(e) {
        if (e.keyCode === 27 && this.state.contactOverlay) {
            this.removeOverlay()
        }
    }

    removeOverlay() {
        this.setState({
            contactOverlay: false,
        })
    }

    toggleOverlay() {
        this.setState({
            contactOverlay: !this.state.contactOverlay,
        })
    }

    renderContactOverlay() {
        if (this.state.contactOverlay) {
            return (
                <Overlay className='contact-form'>
                    <i
                        className='x-out fa fa-times'
                        onClick={this.removeOverlay}
                    />
                    <h1 className='contact-title'>
                        Contact Me
                    </h1>
                    <div className='contact-fields'>
                        <div className='contact-field'>
                            <div className='contact-field-label'>
                                Name
                            </div>
                            <input
                                className='contact-field-input'
                                placeholder='George Washington'
                            />
                        </div>
                        <div className='contact-field'>
                            <div className='contact-field-label'>
                                Email
                            </div>
                            <input
                                className='contact-field-input'
                                placeholder='gwashington@gmail.com'
                            />
                        </div>
                        <div className='contact-field'>
                            <div className='contact-field-label'>
                                Message
                            </div>
                            <textarea
                                className='contact-field-input contact-message'
                                placeholder='...'
                            />
                        </div>
                        <div className='contact-controls'>
                            <div className='contact-submit'>
                                Submit
                            </div>
                            <div
                                className='contact-cancel'
                                onClick={this.removeOverlay}
                            >
                                Cancel
                            </div>
                        </div>
                    </div>
                </Overlay>
            )
        }
        return null
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
                <div
                    ref={node => this.devContact = node}
                    className='dev-contact'
                    onClick={this.toggleOverlay}
                >
                    Get in Touch
                </div>
                {this.renderContactOverlay()}
            </div>
        )
    }
}
