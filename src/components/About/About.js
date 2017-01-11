import React, { Component } from 'react'

import willlaugh4food from '../../static/images/willlaugh4food.png'
import './About.css'


export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <div className='snapshot-title'>
                    Snapshot
                </div>
                <hr className='title-divider' />
                <img src={willlaugh4food} alt='Will' className='will-about-image' />
            </div>
        )
    }
}
