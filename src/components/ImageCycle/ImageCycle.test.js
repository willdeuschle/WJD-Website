import React from 'react'
import { shallow } from 'enzyme'

import ImageCycle from './ImageCycle'
const shallowSetup = (props={}) => shallow(<ImageCycle {...props} />)

describe('<ImageCycle', () => {
    it('renders itself', () => {
        const renderedImageCycle = shallowSetup()
        expect(renderedImageCycle.find('.ImageCycle-wrapper').length).toBe(1)
    });

    it('can render different icons', () => {
        //TESTFLAG
    });

    it('cycles the icons on click or using specified keys', () => {
        //TESTFLAG
    });
});
