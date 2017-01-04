import AppFrame from './AppFrame';
import React from 'react'
import { shallow } from 'enzyme';

const shallowMount = props => shallow(<AppFrame {...props} />)

describe('<AppFrame />', () => {
    it('should render itself', () => {
        const renderedAppFrame = shallowMount()
        expect(renderedAppFrame.find('.AppFrame').length).toBe(1)
    });

    it('should render a single header', () => {
        const renderedAppFrame = shallowMount()
        expect(renderedAppFrame.find('header').length).toBe(1)
    });

    it('should have header elements on the left and right', () => {
        const renderedAppFrame = shallowMount()
        expect(renderedAppFrame.find('.header-left').length).toBe(1)
        expect(renderedAppFrame.find('.header-right').length).toBe(1)
    });

    it('should render the logo and a variety of tabs', () => {
        const renderedAppFrame = shallowMount()
        expect(renderedAppFrame.find('.header-logo').length).toBe(1)
    });

    it('should render Links for each part of the site', () => {
        const renderedAppFrame = shallowMount()
        expect(renderedAppFrame.find('Link').length).toBe(3)
    });
});
