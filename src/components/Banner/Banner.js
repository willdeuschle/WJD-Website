import React, { Component } from 'react'
import classNames from 'classnames'

import reactLogo from '../../static/react-logo.svg'
import reduxLogo from '../../static/redux-logo.svg'
import willLogo from '../../static/me.png'
import './Banner.css'

const imageArr = [
    {logo: reactLogo, name: 'react'},
    {logo: reduxLogo, name: 'redux'},
    {logo: willLogo, name: 'me'},
]

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
                <ImageCycle />
                <div ref={(node) => this.devName = node} className='dev-name'>
                    Will Deuschle
                </div>
            </div>
        )
    }
}

class ImageCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
        }
        this.cycleImage = this.cycleImage.bind(this)
    }

    chooseImage() {
        let img = imageArr[this.state.currentImage]
        let imageClasses = classNames('spinning-logo', img.name)
        return (
            <img onClick={this.cycleImage} src={img.logo} className={imageClasses} alt='logo' />
        )
    }

    cycleImage() {
        this.setState({
            currentImage: (this.state.currentImage + 1) % imageArr.length
        })
    }

    render() {
        return (
            <div className='logo-wrapper'>
                <div className='spinning-logo-wrapper'>
                    <div className='orbit'>
                        {this.chooseImage()}
                    </div>
                </div>
                <div className='planet'>
                </div>
            </div>
        )
    }
}
                //<img src={reduxLogo} className="spinning-logo redux" alt="Redux-logo" />
                //<img src={me} className="me" alt="Redux-logo" />
