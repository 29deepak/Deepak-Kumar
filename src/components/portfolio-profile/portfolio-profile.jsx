import React, { useState } from 'react'
import './portfolio-profile.css'
import IMG1 from '../../assets/expense.jpeg'
import IMG2 from '../../assets/groupchat.jpeg'
import IMG3 from '../../assets/ecommerce.jpeg'
import IMG4 from '../../assets/booking.jpeg'
import IMG5 from '../../assets/doctor.webp'
import IMG6 from '../../assets/profile.jpg'
import IMG7 from '../../assets/blood-bank.jpg'
import IMG8 from '../../assets/expense1.jpeg'
import IMG9 from '../../assets/quiz.jpg'
import IMG10 from '../../assets/pizza.png'
import IMG11 from '../../assets/groupchat.png'
import IMG12 from '../../assets/job.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let data = [
        {
            id: 1,
            image: IMG4,
            title: 'BOOKING APPOINTMENT APP',
            github: 'https://github.com/29deepak/full-stack-booking-appointment-',

        },
        {
            id: 2,
            image: IMG3,
            title: 'E-COMMERCE WEBSITE',
            github: 'https://github.com/29deepak/e-commerce-website',

        },
        {
            id: 5,
            image: IMG2,
            title: 'GROUP CHAT APPLICATION',
            github: 'https://github.com/29deepak/group-chat-one-to-one-chat',

        },
        {
            id: 6,
            image: IMG1,
            title: 'EXPENSE TRACKER APP',
            github: 'https://github.com/29deepak/expensetracking-backend',

        }, {
            id: 3,
            image: IMG9,
            title: "Quiz Application",
            github: "https://github.com/29deepak/Quiz-Application"
        }, {
            id: 4,
            image: IMG12,
            title: "Job Portal App",
            github: "https://github.com/29deepak/job-portal"
        }, {
            id: 7,
            image: IMG6,
            title: "Profile Update APP",
            github: "https://github.com/29deepak/Profile-Update"
        }, {
            id: 8,
            image: IMG10,
            title: "Food Delivery App",
            github: "https://github.com/29deepak/Food-Delivery-App"
        }, {
            id: 9,
            image: IMG11,
            title: "One to One Chat App",
            github: "https://github.com/29deepak/one-to-one-chat-app"
        }, {
            id: 10,
            image: IMG8,
            title: "Expense Tracker App",
            github: "https://github.com/29deepak/expense_tracker-App"
        }, {
            id: 11,
            image: IMG7,
            title: "Blood Bank App",
            github: "https://github.com/29deepak/blood-bank-app"
        },
        {
            id: 12,
            image: IMG5,
            title: "Doctor Appointment App",
            github: "https://github.com/29deepak/Doctor-Appointment-App"
        }
    ]
    data = data.sort((a, b) => b.id - a.id)


    const recordsPerPage = 2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(lastPage + 1).keys()].slice(1)
    const handlePage = (item) => {
        setCurrentPage(item)
    }

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className=" container  " style={{ marginBottom: "30px" }}>
                <ul className="pagination-list1">
                    {numbers.map((item, i) => (
                        <li key={i} className={`${Number(currentPage) === Number(item) ? 'active' : ""}`} onClick={() => handlePage(item)}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="container portfolio__container">

                {
                    records.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <Link to={`/portfolio/${id}`} className='btn btn-primary' target="_blank">Explaination</Link>
                                </div>
                                <div className="portfolio__item-cta">
                                    <Link to={`/portfolio/demo/${id}`} className='btn btn-primary' target="_blank">Live Demo</Link>
                                    <Link to={`/portfolio/schema/${id}`} className='btn btn-primary' target="_blank">Schema</Link>
                                    <Link to={`/portfolio/images/${id}`} className='btn btn-primary' target="_blank">Demo Images</Link>
                                </div>

                            </article>
                        )
                    })
                }

            </div>
            <div className=" container  portfolio__item">
                <ul className="pagination-list">
                    {numbers.map((item, i) => (
                        <li key={i} className={`${Number(currentPage) === Number(item) ? 'active' : ""}`} onClick={() => handlePage(item)}>{item}</li>
                    ))}
                </ul>
            </div>
        </section >
    )
}

export default Portfolio