import React, { Component } from 'react'

import willlaugh4food from '../../static/images/willlaugh4food.png'
import './Footer.css'

// some constants related to the footer
export const externalLinkArr = [
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/william-deuschle-34954899', icon: 'fa-linkedin'},
    {name: 'Github', link: 'https://github.com/willdeuschle', icon: 'fa-github'},
]

export const myEmail = 'wjdeuschle@gmail.com'

// the extra stuff we want in our footer
export function renderExtra() {
    return (
        <div className='extra-footer'>
            <img src={willlaugh4food} alt='Will' className='willLaugh4Food' />
            <h2 className='made-by'>
                <a className='fa fa-gavel'/> by Will Deuschle
            </h2>
            <div className='view-source'>
                Look at the <a
                    href='https://github.com/willdeuschle/wjd_website'
                    target='_blank'
                >
                    source</a>.
            </div>
        </div>
    )
}


// the actual component
export default class Footer extends Component {
    _renderExternalLinks() {
        let externalLinks = []
        this.props.externalLinkArr.forEach((linkObj) => {
            externalLinks.push(
                <a
                    href={linkObj.link}
                    target='_blank'
                    key={linkObj.link}
                    className={`link-item fa ${linkObj.icon}`}
                />
            )
        });
        return (
            <div className='external-links'>
                {externalLinks}
                <a
                    href={`mailto:${this.props.email}`}
                    key={'email'}
                    className='link-item fa fa-envelope'
                />
            </div>
        )
    }

    render() {
        return (
            <div className='Footer'>
                {this.props.renderExtra()}
                {this._renderExternalLinks()}
            </div>
        )
    }
}

Footer.propTypes = {
    externalLinkArr: React.PropTypes.array.isRequired,
    email: React.PropTypes.string.isRequired,
    renderExtra: React.PropTypes.func,
}

Footer.defaultProps = {
    renderExtra: () => null,
}
