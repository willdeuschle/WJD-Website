import AppFrame, { TopBarItem } from './AppFrame';
import React from 'react'
import { shallow, mount } from 'enzyme';

import resumeUrl from '../../static/resumeUrl';

const shallowSetup = (props={}) => shallow(<AppFrame {...props} />)
const mountSetup = (props={}) => mount(<AppFrame {...props} />)

describe('<AppFrame />', () => {
    it('should render itself', () => {
        const renderedAppFrame = shallowSetup()
        expect(renderedAppFrame.find('.AppFrame').length).toBe(1)
    });

    it('should render a single header', () => {
        const renderedAppFrame = shallowSetup()
        expect(renderedAppFrame.find('header').length).toBe(1)
    });

    it('should have header elements on the left and right', () => {
        const renderedAppFrame = shallowSetup()
        expect(renderedAppFrame.find('.header-left').length).toBe(1)
        expect(renderedAppFrame.find('.header-right').length).toBe(1)
    });

    it('should render the logo and a variety of tabs', () => {
        const renderedAppFrame = mountSetup()
        expect(renderedAppFrame.find('.header-logo').length).toBe(1)
    });

    it('should render NavLinks for each part of the site', () => {
        const renderedAppFrame = mountSetup()
        expect(renderedAppFrame.find('NavLink').length).toBe(3)
    });

    it('should render an <a/> element with the correct link', () => {
        const renderedAppFrame = shallowSetup()
        expect(renderedAppFrame.find('.header-right').node.props.href).toBe(resumeUrl)
    });

    it('should also have a dropdown for small screens', () => {
        const renderedAppFrame = shallowSetup()
        //TESTFLAG
    })
});


describe('<TopBarItem />', () => {
    it('should render NavLinks with the appropriate attributes', () => {
        const to = 'foo'
        const styling = 'bar'
        const children = 'baz'
        const renderedTopBarItem = mount(<TopBarItem to={to} styling={styling}>{children}</TopBarItem>)

        // should have the correct 'to' parameter
        expect(renderedTopBarItem.instance().props.to).toBe(to)
        // should have the class name we supplied
        expect(renderedTopBarItem.find(`.${styling}`).length).toBe(1)
        // along with the default className
        expect(renderedTopBarItem.find('.top-row').length).toBe(1)
        // should have the children
        expect(renderedTopBarItem.find('.bar').text()).toBe(children)
    });
});
