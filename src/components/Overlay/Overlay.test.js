import React from 'react'
import { shallow } from 'enzyme'

import Overlay from './Overlay'

const shallowSetup = (props={}) => shallow(<Overlay {...props} />)


describe('<Overlay />', () => {
    it('should render itself', () => {
        const renderedOverlay = shallowSetup()
        expect(renderedOverlay.find('.Overlay').length).toBe(1)
    });
});
