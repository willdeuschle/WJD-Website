import React from 'react'
import { shallow } from 'enzyme'

import TechStack from './TechStack'

const shallowSetup = (props={}) => shallow(<TechStack {...props} />)

describe('<TechStack />', () => {
    it('should render itself', () => {
        const renderedTechStack = shallowSetup()
        expect(renderedTechStack.find('.TechStack').length).toBe(1)
    });
});
