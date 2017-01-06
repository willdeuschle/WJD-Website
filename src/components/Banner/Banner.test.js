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

    it('should have a fade-in effect marked by an extra className', (done) => {
        // for the timeout
        const testing = () => {
            expect(renderedBanner.find('.fade-in').length).toBe(1)
            done()
        }
        const renderedBanner = mountSetup()
        expect(renderedBanner.find('.fade-in').length).toBe(0)
        setTimeout(testing, 300)
    });
});
