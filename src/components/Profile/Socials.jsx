import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
const Socials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/deepak-kumar-484970192/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/29deepak" target="_blank"><FaGithub /></a>
        </div>
    )
}

export default Socials