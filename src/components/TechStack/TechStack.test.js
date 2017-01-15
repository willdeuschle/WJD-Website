import React from 'react'
import { shallow, mount } from 'enzyme'

import TechStack from './TechStack'
import technologies from '../../static/techstack.js'


const shallowSetup = (props={}) => shallow(<TechStack {...props} />)
const mountSetup = (props={}) => mount(<TechStack {...props} />)

const requiredProps = {blocks: technologies}

describe('<TechStack />', () => {
    it('should render itself, a header component, and a dividing line', () => {
        const renderedTechStack = shallowSetup(requiredProps)
        expect(renderedTechStack.find('.TechStack').length).toBe(1)
        expect(renderedTechStack.find('.techstack-header').length).toBe(1)
        expect(renderedTechStack.find('.techstack-divider').length).toBe(1)
    });

    it('should render a block for each thing of interest', () => {
        const renderedTechStack = mountSetup(requiredProps)
        expect(renderedTechStack.find('.Block').length).toBe(Object.keys(requiredProps.blocks).length)
    });

    it('should only render a single block if we are currently viewing something', () => {
        const renderedTechStack = shallowSetup(requiredProps)
        // at first we are seeing everything
        expect(renderedTechStack.find('.Block').length).toBeGreaterThan(1)
        expect(renderedTechStack.find('.Block.single').length).toBe(0)
        // set state to viewing something
        renderedTechStack.setState({currentlyViewing: 'python'})
        // now only viewing one block
        expect(renderedTechStack.find('.Block.single').length).toBe(1)
    });

    it('should switch between the single block and multiple blocks on click', () => {
        const renderedTechStack = shallowSetup(requiredProps)
        // at first we are seeing everything
        expect(renderedTechStack.find('.Block').length).toBeGreaterThan(1)
        expect(renderedTechStack.find('.Block.single').length).toBe(0)
        // click something
        renderedTechStack.find('.Block').first().simulate('click')
        // now only a single block
        expect(renderedTechStack.find('.Block.single').length).toBe(1)
        // click back
        renderedTechStack.find('.Block').first().simulate('click')
        // back to the start
        expect(renderedTechStack.find('.Block').length).toBeGreaterThan(1)
        expect(renderedTechStack.find('.Block.single').length).toBe(0)
    });

    it('should render a title, description, image, and back button in the single block', () => {
        const renderedTechStack = shallowSetup(requiredProps)
        // at first we are seeing everything
        expect(renderedTechStack.find('.Block').length).toBeGreaterThan(1)
        expect(renderedTechStack.find('.Block.single').length).toBe(0)
        // click something
        renderedTechStack.find('.Block').first().simulate('click')
        expect(renderedTechStack.find('.Block .block-title').length).toBe(1)
        expect(renderedTechStack.find('.Block .fa-caret-left').length).toBe(1)
        expect(renderedTechStack.find('.Block .block-img').length).toBe(1)
        expect(renderedTechStack.find('.Block .block-desc').length).toBe(1)
    });
});
