import React from 'react'

import { shallow } from 'enzyme'
import Hamburger from './Hamburger.js'


const shallowSetup = (props={}) => shallow(<Hamburger {...props} />)
const minimumProps = {options: []}

describe('<Hamburger />', () => {
    it('should render properly', () => {
        const renderedHamburger = shallowSetup(minimumProps)
        expect(renderedHamburger.find('.Hamburger').length).toBe(1)
        expect(renderedHamburger.find('.filling').length).toBe(1)
    });

    it('should have a renderOptions method', () => {
        const renderedHamburger = shallowSetup(minimumProps)
        expect(renderedHamburger.instance().renderOptions).not.toBeUndefined()
    });

    it('should render the correct number of NavLinks', () => {
        let props = {options: [{to: 'Buffalo', name: 'Home'}, {to: 'USA', name: 'freedom'}]}
        const renderedHamburger = shallowSetup(props)
        expect(renderedHamburger.find('NavLink').length).toBe(props.options.length)
    });

    it('should have NavLinks with the correct "to" and "children" properties', () => {
        let to_1 = {to: 'Buffalo', name: 'Home'}
        let to_2 = {to: 'Boston', name: 'School'}
        let props = {options: [to_1, to_2]}
        const renderedHamburger = shallowSetup(props)
        expect(renderedHamburger.find('NavLink').get(0).props.to).toEqual(to_1.to)
        expect(renderedHamburger.find('NavLink').get(0).props.children).toEqual(to_1.name)
        expect(renderedHamburger.find('NavLink').get(1).props.to).toEqual(to_2.to)
        expect(renderedHamburger.find('NavLink').get(1).props.children).toEqual(to_2.name)
    });

    it('should have a `dropdown-content show` class if the state is currently showing', () => {
    });

    it('should have a toggleShow method and execute on click', () => {
    });
});
