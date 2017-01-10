import React, { Component } from 'react'

import './ProjectTile.css'

export default class ProjectTile extends Component {
    render() {
        return (
            <a href={this.props.link} target='_blank' className='ProjectTile'>
                <div className='project-title'>
                    {this.props.title || ''}
                </div>
                <div className='project-desc'>
                    {this.props.desc}
                </div>
                <img src={this.props.img} className='project-image' alt='project'/>
            </a>
        )
    }
}

ProjectTile.propTypes = {
    link: React.PropTypes.string,
    img: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
}
