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
            return Object.keys(this.props.blocks).map((block_name) => {
                return (
                    <div
                        key={block_name}
                        className='Block'
                        onClick={() => this.transitionIn(block_name)}
                    >
                        {this.props.blocks[block_name].name}
                    </div>
                )
            })
        }
        return (
            <div
                key={this.state.currentlyViewing}
                className='Block single'
                onClick={this.transitionOut}
            >
                <div className='block-title'>
                {
                    this.props.blocks[this.state.currentlyViewing].name
                }
                </div>
                <img
                    className='block-img'
                    src={this.props.blocks[this.state.currentlyViewing].img}
                    alt='block'
                />
                <div className='block-desc'>
                    {this.props.blocks[this.state.currentlyViewing].desc}
                </div>
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
    blocks: React.PropTypes.object.isRequired,
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
