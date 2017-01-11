import Portfolio from './Portfolio';
import React from 'react';
import { shallow } from 'enzyme';

import projectData from '../../static/projects'

const shallowMount = props => shallow(<Portfolio {...props} />)

describe('<Portfolio />', () => {
    it('should render itself', () => {
        const renderedPortfolio = shallowMount()
        expect(renderedPortfolio.find('.Portfolio').length).toBe(1)
    });

    it('should have a method to render the tiles', () => {
        const renderedPortfolio = shallowMount()
        expect(renderedPortfolio.instance().renderProjectTiles).not.toBeUndefined()
    });

    it('should render the correct number of project tiles', () => {
        const numProjectTiles = Object.keys(projectData).length
        const renderedPortfolio = shallowMount()
        expect(renderedPortfolio.find('ProjectTile').length).toBe(numProjectTiles)
    });
});
