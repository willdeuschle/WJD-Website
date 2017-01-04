import React, { Component } from 'react';
import { Link } from 'react-router';

import './AppFrame.css';


export default class AppFrame extends Component {
    render() {
        return (
            <div className='AppFrame'>
                <header>
                    <div className='header-left'>
                        <div className='header-logo'>
                            <Link to='/'>
                                logo
                            </Link>
                        </div>
                        <Link to='about'>
                            About
                        </Link>
                        <Link to='portfolio'>
                            portfolio
                        </Link>
                    </div>
                    <div className='header-right'>
                        resume will go here
                    </div>
                </header>
            </div>
        )
    }
}
