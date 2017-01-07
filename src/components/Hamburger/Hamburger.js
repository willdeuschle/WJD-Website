import React, { Component } from 'react'
import classNames from 'classnames'

import NavLink from '../NavLink/NavLink.js'
import './Hamburger.css'


export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.toggleShow = this.toggleShow.bind(this)
    }

    renderOptions() {
        let optionItems = []
        this.props.options.forEach((option) => {
            optionItems.push(
                <NavLink
                    key={option.to}
                    className='dropdown-item'
                    to={option.to}
                >
                    {option.name}
                </NavLink>
            )
        })
        return optionItems
    }

    toggleShow() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let hamburger = classNames('Hamburger', {'show': this.state.show})
        let dropdownContent = classNames('dropdown-content', {'show': this.state.show})

        return (
            <div className='Hamburger-wrapper'>
                <button onClick={this.toggleShow} className={hamburger}>
                    <span className='filling'/>
                </button>
                <div className='dropdown'>
                    <div className={dropdownContent}>
                        {this.renderOptions()}
                    </div>
                </div>
            </div>
        )
    }
}

Hamburger.propTypes = {
    options: React.PropTypes.array.isRequired,
}
