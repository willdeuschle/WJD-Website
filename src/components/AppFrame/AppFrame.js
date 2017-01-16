import React from 'react'

import NavLink from '../NavLink/NavLink'
import Hamburger from '../Hamburger/Hamburger.js'
import resumeUrl from '../../static/resumeUrl'
import './AppFrame.css'


const LinkDict = {
    Home: {to: '/', name: 'Home'},
    Portfolio: {to: 'portfolio', name: 'Portfolio'},
}


export default function AppFrame() {
    return (
        <div className='AppFrame'>
            <header>
                <div className='header-left'>
                    <TopBarItem
                        to={LinkDict.Home.to}
                        styling='header-logo'
                        onlyActiveOnIndex={true}
                    >
                        Home
                    </TopBarItem>
                    <TopBarItem to={LinkDict.Portfolio.to}>
                        Portfolio
                    </TopBarItem>
                </div>
                <div className='small-header-left'>
                    <Hamburger options={Object.keys(LinkDict).map((item) => LinkDict[item])} />
                </div>
                <a href={resumeUrl} target='_blank' className='header-right top-row'>
                    Resume
                </a>
            </header>
        </div>
    )
}

export function TopBarItem({to, styling='', children, onlyActiveOnIndex}) {
    return (
        <NavLink to={to} className={`${styling} top-row`} onlyActiveOnIndex>
            {children}
        </NavLink>
    )
}
