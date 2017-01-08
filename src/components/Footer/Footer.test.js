import React from 'react'
import { shallow, mount } from 'enzyme'

import Footer, { externalLinkArr, myEmail } from './Footer'


const shallowSetup = (props={}) => shallow(<Footer {...props} />)
const mountSetup = (props={}) => mount(<Footer {...props} />)
const requiredProps = {
    externalLinkArr,
    email: myEmail,
}

describe('<Footer />', () => {
    it('should render itself', () => {
        const renderedFooter = shallowSetup(requiredProps)
        expect(renderedFooter.find('.Footer').length).toBe(1)
    });

    it('should render the row of links I want to display', () => {
        const renderedFooter = shallowSetup(requiredProps)
        expect(renderedFooter.find('.external-links').length).toBe(1)
    });

    it('should render the correct number of link items', () => {
        const renderedFooter = mountSetup(requiredProps)
        // the + 1 is for the email icon
        expect(renderedFooter.find('.link-item').length).toBe(externalLinkArr.length + 1)
    });

    it('should also render a mailing icon', () => {
        const renderedFooter = shallowSetup(requiredProps)
        expect(renderedFooter.find('.fa-envelope').length).toBe(1)
    });

    it('should render extra if something is there', () => {
        // TESTFLAG
    });
});
