import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    const location = useLocation()

    const { pathname } = location
    const splitLocation = pathname.split('/')
    return (
        <header>
            <div className='container'>
                <div className='header'>
                    {/* <div className='logo'>
                    <img src='Image/logo.PNG' alt='logo' />
                </div> */}
                    <div className='title'>
                        <ul>
                            <li className={splitLocation[1] === '' ? 'active' : ''}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className={splitLocation[1] === 'contact' ? 'active' : ''}>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            {/* <li>
                            <Link to='/cv'>My cv</Link>
                        </li> */}
                            <li className={splitLocation[1] === 'portfolio' ? 'active' : ''}>
                                <Link to='/portfolio'>Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                    <i class="fas fa-bars"></i>
                </div>
                <div className='Small'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/cv'>My cv</Link>
                        </li>
                        <li>
                            <Link to='/images'>Images</Link>
                        </li>
                    </ul>
                </div> */}
                </div>
            </div>
        </header>
    )
}

