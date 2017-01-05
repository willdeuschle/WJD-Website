import React from 'react';
import NavLink from '../NavLink/NavLink';

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
                <div className='header-right top-row'>
                    Resume
                </div>
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
