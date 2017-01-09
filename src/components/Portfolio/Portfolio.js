import React, { Component } from 'react';

import ProjectTile from '../ProjectTile/ProjectTile'
import './Portfolio.css'


export default class Portfolio extends Component {
    render() {
        return (
            <div className='Portfolio'>
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
