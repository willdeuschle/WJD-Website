import React from 'react'
import { shallow } from 'enzyme'

import ProjectTile from './ProjectTile'

const shallowSetup = (props={}) => shallow(<ProjectTile {...props} />)

describe('<ProjectTile />', () => {
    it('should render properly', () => {
        const renderedProjectTile = shallowSetup()
        expect(renderedProjectTile.find('.ProjectTile').length).toBe(1)
    });
});
