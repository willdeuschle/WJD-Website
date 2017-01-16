import React from 'react'
import { shallow, mount } from 'enzyme'

import Banner from './Banner'

const shallowSetup = (props={}) => shallow(<Banner {...props} />)
const mountSetup = (props={}) => mount(<Banner {...props} />)

describe('<Banner />', () => {
    it('should render itself', () => {
        const renderedBanner = shallowSetup()
        expect(renderedBanner.find('.Banner').length).toBe(1)
    });

    it('should render the dev-name', () => {
        const renderedBanner = shallowSetup()
        expect(renderedBanner.find('.dev-name').length).toBe(1)
    });

    it('should have a fade-in effect marked by an extra classNames', (done) => {
        // for the first timeout
        const testingFirst = () => {
            expect(renderedBanner.find('.fade-in-first').length).toBe(1)
        }

        // for the second timeout
        const testingSecond = () => {
            expect(renderedBanner.find('.fade-in-second').length).toBe(1)
            done()
        }

        // for the last timeout
        const testingLast = () => {
            expect(renderedBanner.find('.fade-in-last').length).toBe(1)
            done()
        }

        const renderedBanner = mountSetup()

        expect(renderedBanner.find('.fade-in-first').length).toBe(0)
        expect(renderedBanner.find('.fade-in-second').length).toBe(0)

        setTimeout(testingFirst, 300)
        setTimeout(testingSecond, 500)
        setTimeout(testingLast, 700)
    });

    it('should render the Get In Touch button', () => {
        const renderedBanner = shallowSetup()
        // the button
        expect(renderedBanner.find('.dev-contact').length).toBe(1)
    });
});
