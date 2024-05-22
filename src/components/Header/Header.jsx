import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation()
    return (
        <div id="container">
            <div className='home border'>
                <div>
                    <Link to="/" className={`${location.pathname === "/" ? 'active' : ""}`}>Home</Link>
                </div>
            </div>
            <div className='about border'>
                <div>
                    <Link to="/about" className={`${location.pathname === "/about" ? 'active' : ""}`}>About</Link>
                </div>
            </div>
            <div className='education border'>
                <div>
                    <Link to="/education" className={`${location.pathname === "/education" ? 'active' : ""}`}>Education</Link>
                </div>
            </div>
            <div className='skills border'>
                <div>
                    <Link to="/skills" className={`${location.pathname === "/skills" ? 'active' : ""}`}>Skills</Link>
                </div>
            </div>
            <div className='experience border'>
                <div>
                    <Link to="/experience" className={`${location.pathname === "/experience" ? 'active' : ""}`}>Experiences</Link>
                </div>
            </div>
            <div className='portfolio border'>
                <div>
                    <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? 'active' : ""}`}>Portfolio</Link>
                </div>
            </div>
            <div className='services border'>
                <div>
                    <Link to="/services" className={`${location.pathname === "/services" ? 'active' : ""}`}>Services</Link>
                </div>
            </div>
            <div className='testimonials border'>
                <div>
                    <Link to="/testimonials" className={`${location.pathname === "/testimonials" ? 'active' : ""}`}>Testimonials</Link>
                </div>
            </div>
            <div className='contact border'>
                <div>
                    <Link to="/contact" className={`${location.pathname === "/contact" ? 'active' : ""}`}>Contact Me</Link>
                </div>
            </div>
            <div className="profile-logo">

            </div>
        </div>
    )
}

export default Header