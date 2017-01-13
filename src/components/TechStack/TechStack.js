import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './TechStack.css'


export default class TechStack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentlyViewing: null,
        }
        this.transitionIn = this.transitionIn.bind(this)
        this.transitionOut = this.transitionOut.bind(this)
    }

    transitionIn(block) {
        this.setState({
            currentlyViewing: block,
        })
    }

    transitionOut() {
        this.setState({
            currentlyViewing: null,
        })
    }

    renderBlocks() {
        if (!this.state.currentlyViewing) {
            return this.props.blocks.map((block) => {
                return (
                    <div
                        key={block}
                        className='Block'
                        onClick={() => this.transitionIn(block)}
                    >
                        {block}
                    </div>
                )
            })
        }
        return (
            <div
                key={this.state.currentlyViewing}
                className='Block'
                onClick={this.transitionOut}
            >
                {this.state.currentlyViewing}
            </div>
        )
    }

    render() {
        return (
            <div className='TechStack'>
                <div className='techstack-header'>
                    Tech Stack
                </div>
                <hr className='techstack-divider' />
                <ReactCSSTransitionGroup
                    className='block-wrapper'
                    transitionName='blocks'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {this.renderBlocks()}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

TechStack.propTypes = {
    blocks: React.PropTypes.array.isRequired,
}


class Block extends Component {
    render() {
        return (
            <div className='Block'>
                {this.props.block}
            </div>
        )
    }
}
