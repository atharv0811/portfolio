import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const clickBars = () => {
        setIsNavOpen(prevState => !prevState);
    };

    return (
        <div className='header'>
            <Link to="/" className="logo"><i className="fab fa-node-js"></i> Atharv</Link>

            <div id="menu" className={`fas fa-bars ${isNavOpen ? 'fa-times' : ''}`} onClick={clickBars}></div>
            <nav className={`navbar ${isNavOpen ? 'nav-toggle' : ''}`}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/education">Education</NavLink></li>
                    <li><NavLink to="/work">Work</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
