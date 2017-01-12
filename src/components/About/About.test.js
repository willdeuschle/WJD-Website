import React from 'react'
import { shallow } from 'enzyme'

import About from './About'

const shallowSetup = (props={}) => shallow(<About {...props} />)

describe('<About />', () => {
    it('should render itself, a snapshot, a small divider, an image, a title, a role description, a role divider, description paragraphs', () => {
        const renderedAbout = shallowSetup()
        expect(renderedAbout.find('.About').length).toBe(1)
        expect(renderedAbout.find('.snapshot-title').length).toBe(1)
        expect(renderedAbout.find('.title-divider').length).toBe(1)
        expect(renderedAbout.find('.will-about-image').length).toBe(1)
        expect(renderedAbout.find('.will-title').length).toBe(1)
        expect(renderedAbout.find('.role-desc').length).toBe(1)
        expect(renderedAbout.find('.role-divider').length).toBe(1)
        expect(renderedAbout.find('.desc-para').length).toBeGreaterThanOrEqual(1)
    });
});
