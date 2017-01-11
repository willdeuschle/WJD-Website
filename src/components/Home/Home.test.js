import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home'

const shallowSetup = (props={}) => shallow(<Home {...props} />)


describe('<Home />', () => {
    it('should render itself', () => {
        const renderedHome = shallowSetup()
        expect(renderedHome.find('.Home').length).toBe(1)
    });

    it('should render a Banner', () => {
        const renderedHome = shallowSetup()
        expect(renderedHome.find('Banner').length).toBe(1)
    });

    it('should render an About section', () => {
        const renderedHome = shallowSetup()
        expect(renderedHome.find('About').length).toBe(1)
    });
});
