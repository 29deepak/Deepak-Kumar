import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Portfolios from '../portfolio-profile/portfolio-profile'
import './Portfolio.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="btn btn-primary">

        <Link to="/design" style={{ color: "white" }}>Design</Link>
      </div>

      <Portfolios />
      <Footer />
    </>
  )
}

export default Portfolio