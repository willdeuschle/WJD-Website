import React from 'react'
import { shallow, mount } from 'enzyme'

import TechStack from './TechStack'

const shallowSetup = (props={}) => shallow(<TechStack {...props} />)
const mountSetup = (props={}) => mount(<TechStack {...props} />)

const requiredProps = {blocks: ['Python', 'Javascript']}

describe('<TechStack />', () => {
    it('should render itself, a header component, and a dividing line', () => {
        const renderedTechStack = shallowSetup(requiredProps)
        expect(renderedTechStack.find('.TechStack').length).toBe(1)
        expect(renderedTechStack.find('.techstack-header').length).toBe(1)
        expect(renderedTechStack.find('.techstack-divider').length).toBe(1)
    });

    it('should render a block for each thing of interest', () => {
        const renderedTechStack = mountSetup(requiredProps)
        expect(renderedTechStack.find('.Block').length).toBe(requiredProps.blocks.length)
    });

    it('should only render a single block if we are currently viewing something', () => {
        //TESTFLAG
    });

    it('should switch between the single block and multiple blocks on click', () => {
        //TESTFLAG
    });

    it('should render a title, description, image, and back button in the single block', () => {
        //TESTFLAG
    });
});
