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
                <div className='will-title'>
                    Will Deuschle
                </div>
                <div className='role-desc'>
                    Full Stack Software Engineer
                </div>
                <hr className='role-divider' />
                <div className='desc-para'>
                    Software Engineer from Buffalo, New York, undergraduate at Harvard University. Currently on a year off working at a startup in Washington, D.C. called <a href='https://www.quorum.us' target='_blank' className='quorum-link' >Quorum</a>.
                </div>
                <div className='desc-para'>
                    Passionate about front-end design, functional programming, and mobile development.
                </div>
            </div>
        )
    }
}
