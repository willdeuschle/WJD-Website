import React, { Component } from 'react'

import './ProjectTile.css'

export default class ProjectTile extends Component {
    render() {
        return (
            <div className='ProjectTile'>
                <a href={this.props.link}>
                    <div className='project-title'>
                        {this.props.title || ''}
                    </div>
                    <img src={this.props.img} className='project-image' alt='project'/>
                    <div className='project-desc'>
                        {this.props.desc}
                    </div>
                </a>
            </div>
        )
    }
}

ProjectTile.propTypes = {
    link: React.PropTypes.string,
    img: React.PropTypes.string,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
}
