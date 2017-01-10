import React, { Component } from 'react';

import ProjectTile from '../ProjectTile/ProjectTile'
import './Portfolio.css'
import { projectLinks, projectImageLinks } from '../../static/projects'


export default class Portfolio extends Component {
    render() {
        return (
            <div className='Portfolio'>
                <ProjectTile
                    link={projectLinks.medium_simplifier}
                    img={projectImageLinks.medium_simplifier}
                    title={'Medium Simplifier'}
                    desc={'Elm application to summarize Medium articles.'}
                />
                <ProjectTile
                    link={''}
                    img={''}
                    title={''}
                    desc={''}
                />
            </div>
        )
    }
}
