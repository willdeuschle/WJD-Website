import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'

import ImageCycle, { imageArr } from './ImageCycle'
const shallowSetup = (props={}) => shallow(<ImageCycle {...props} />)
const mountSetup = (props={}) => mount(<ImageCycle {...props} />)

describe('<ImageCycle', () => {
    it('renders itself', () => {
        const renderedImageCycle = shallowSetup()
        expect(renderedImageCycle.find('.ImageCycle-wrapper').length).toBe(1)
    });

    it('renders different icons based on the current state, and cycles back to beginning', () => {
        const renderedImageCycle = mountSetup()
        // test they are all appropriately rendered
        imageArr.forEach((item, idx, arr) => {
            // that index should now be displayed
            expect(renderedImageCycle.find(`.${arr[idx].name}`).length).toBe(1)
            // next image
            renderedImageCycle.instance().cycleImage()
        });
        // now we should be back to the beginning
        expect(renderedImageCycle.find(`.${imageArr[0].name}`).length).toBe(1)
        expect(renderedImageCycle.find(`.${imageArr[1].name}`).length).toBe(0)
    });

    it('cycles the icons on click or using specified keys', () => {
        // spy on the prototype's function
        sinon.spy(ImageCycle.prototype, 'cycleImage')
        // render
        const renderedImageCycle = mountSetup()
        // should be defined on the instance
        expect(renderedImageCycle.instance().cycleImage).not.toBeUndefined()
        // not yet called
        expect(ImageCycle.prototype.cycleImage.calledOnce).toBe(false)
        // trigger it
        renderedImageCycle.find(`.${imageArr[0].name}`).simulate('click')
        // should now be called
        expect(ImageCycle.prototype.cycleImage.calledOnce).toBe(true)
    });
});
