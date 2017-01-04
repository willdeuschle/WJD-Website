import About from './About';
import React from 'react';
import { shallow } from 'enzyme';

const shallowMount = props => shallow(<About {...props} />)

describe('<About />', () => {
    it('should render itself', () => {
        const renderedAbout = shallowMount()
        expect(renderedAbout.find('.About').length).toBe(1)
    });
});
