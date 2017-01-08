import React, { Component } from 'react'

import './Footer.css'

export const externalLinkArr = [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/william-deuschle-34954899', icon: 'fa-linkedin'},
    {name: 'Github', link: 'https://github.com/willdeuschle', icon: 'fa-github'},
]

export const myEmail = 'wjdeuschle@gmail.com'


export default class Footer extends Component {
    _renderExternalLinks() {
        let externalLinks = []
        this.props.externalLinkArr.forEach((linkObj) => {
            externalLinks.push(
                <a href={linkObj.link} target='_blank' key={linkObj.link} className={`link-item fa ${linkObj.icon}`} />
            )
        });
        return (
            <div className='external-links'>
                {externalLinks}
                <a href={`mailto:${this.props.email}`} key={'email'} className='link-item fa fa-envelope'/>
            </div>
        )
    }

    render() {
        return (
            <div className='Footer'>
                {this._renderExternalLinks()}
            </div>
        )
    }
}

Footer.propTypes = {
    externalLinkArr: React.PropTypes.array.isRequired,
    email: React.PropTypes.string.isRequired,
}
