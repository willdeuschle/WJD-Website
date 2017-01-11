import React, { Component } from 'react';

import ProjectTile from '../ProjectTile/ProjectTile'
import './Portfolio.css'
import projectData from '../../static/projects'


export default class Portfolio extends Component {
    renderProjectTiles() {
        return Object.keys(projectData).map((item) => {
            return (
                <ProjectTile
                    key={projectData[item].title}
                    link={projectData[item].link}
                    img={projectData[item].image}
                    title={projectData[item].title}
                    desc={projectData[item].desc}
                />
            )
        })
    }

    render() {
        return (
            <div className='Portfolio'>
                {this.renderProjectTiles()}
            </div>
        )
    }
}

Portfolio.propTypes = {
    projectData: React.PropTypes.object,
}
