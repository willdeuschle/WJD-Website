import React from 'react';
import NavLink from '../NavLink/NavLink';

import resumeUrl from '../../static/resumeUrl';
import './AppFrame.css';


export default function AppFrame() {
    return (
        <div className='AppFrame'>
            <header>
                <div className='header-left'>
                    <TopBarItem to='/' styling='header-logo' onlyActiveOnIndex={true}>
                        Home
                    </TopBarItem>
                    <TopBarItem to='portfolio' styling='top-row'>
                        Portfolio
                    </TopBarItem>
                    <TopBarItem to='about' styling='top-row'>
                        About
                    </TopBarItem>
                </div>
                <div className='header-left'>
                    <select className='small-screen-options'>
                        <option value='/'>Home</option>
                        <option value='portfolio'>Portfolio</option>
                        <option value='about'>About</option>
                    </select>
                </div>
                <a href={resumeUrl} target='_blank' className='header-right top-row'>
                    Resume
                </a>
            </header>
        </div>
    )
}

export function TopBarItem({to, styling, children, onlyActiveOnIndex}) {
    return (
        <NavLink to={to} className={`${styling} top-row`} onlyActiveOnIndex>
            {children}
        </NavLink>
    )
}
