import React, { Component } from 'react'
import classNames from 'classnames'

import './ImageCycle.css'
import reactLogo from '../../static/react-logo.svg'
import reduxLogo from '../../static/redux-logo.svg'
import willLogo from '../../static/me.png'


const imageArr = [
    {logo: reactLogo, name: 'react'},
    {logo: reduxLogo, name: 'redux'},
    {logo: willLogo, name: 'me'},
]


export default class ImageCycle extends Component {
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
            <div className='ImageCycle-wrapper'>
                <div className='flipping-logo-wrapper'>
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
