import Portfolio from './Portfolio';
import React from 'react';
import { shallow } from 'enzyme';

const shallowMount = props => shallow(<Portfolio {...props} />)

describe('<Portfolio />', () => {
    it('should render itself', () => {
        const renderedPortfolio = shallowMount()
        expect(renderedPortfolio.find('.Portfolio').length).toBe(1)
    });
});
