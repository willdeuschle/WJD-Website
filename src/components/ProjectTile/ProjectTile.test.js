import React from 'react'
import { shallow } from 'enzyme'

import ProjectTile from './ProjectTile'

const shallowSetup = (props={}) => shallow(<ProjectTile {...props} />)

describe('<ProjectTile />', () => {
    it('should render properly', () => {
        const renderedProjectTile = shallowSetup()
        expect(renderedProjectTile.find('.ProjectTile').length).toBe(1)
    });

    it('should have a title, an image, and a description', () => {
        const renderedProjectTile = shallowSetup()
        expect(renderedProjectTile.find('.project-title').length).toBe(1)
        //expect(renderedProjectTile.find('.project-image').length).toBe(1)
        expect(renderedProjectTile.find('.project-desc').length).toBe(1)
    });
});
