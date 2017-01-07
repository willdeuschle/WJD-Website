import Timeline from './Timeline';
import React from 'react';
import { shallow } from 'enzyme';

const shallowMount = props => shallow(<Timeline {...props} />)

describe('<Timeline />', () => {
    it('should render itself', () => {
        const renderedTimeline = shallowMount()
        expect(renderedTimeline.find('.Timeline').length).toBe(1)
    });
});
