import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'


describe('<App />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<App />, div)
    });

    it('renders the AppFrame, Banner, Footer', () => {
        const renderedApp = shallow(<App />)
        expect(renderedApp.find('AppFrame').length).toBe(1)
        expect(renderedApp.find('Banner').length).toBe(1)
        expect(renderedApp.find('Footer').length).toBe(1)
    });
});

