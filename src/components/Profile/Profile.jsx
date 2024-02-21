import React from 'react'
import './Profile.css'
import ME from '../../assets/deepak.png'
import CTA from './CTA'
const Profile = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Deepak Kumar</h1>
        <h5 className="text-light">FullStack Developer + DevOps Engineer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
      </div>
    </header>
  )
}

export default Profile