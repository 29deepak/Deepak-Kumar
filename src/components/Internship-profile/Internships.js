import React, { useState } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Interships.css'
const Internships = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const skillsData = [
        {
            id: 1,
            title: "Diabetes prediction",
            date: "Mar 2022 - Apr 2022",
            company: "Tekatron pro solutions"

        }, {
            id: 2,
            title: "Social Media Marketing Intern",
            date: "jun 2021 - Aug 2021",
            company: "Bharti Sangrahita"
        }, {
            id: 3,
            title: "Youth Ambassador",
            date: "Jun 2021 - Jul 2021",
            company: "United Nations Volunteers"
        },
        {
            id: 4,
            title: "Student Volunteer",
            date: "May 2021 - Jul 2021",
            company: "YuWaah India at UNICEF "
        },
        {
            id: 5,
            title: "Campus Ambassador",
            date: "Jan 2020 - Feb 2020",
            company: "Techniche, IIT Guwahati"
        }, {
            id: 6,
            title: "Campus Ambassador",
            date: "Dec 2019 - Jan 2020",
            company: "TRYST, IIT Delhi"
        }
    ]
    const recordsPerPage = 2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = skillsData.slice(firstIndex, lastIndex);
    const lastPage = Math.ceil(skillsData.length / recordsPerPage);
    const numbers = [...Array(lastPage + 1).keys()].slice(1)
    const handlePage = (item) => {
        setCurrentPage(item)
    }
    return (
        <>
            <section id='skills'>
                <h5> What InternShips I Have Done.</h5>
                <h2> My InternShip</h2>
                <div className=" container intern__container" style={{ marginBottom: "30px" }}>
                    <ul className="pagination-list1">
                        {numbers.map((item, i) => (
                            <li key={i} className={`${Number(currentPage) === Number(item) ? 'active' : ""}`} onClick={() => handlePage(item)}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="container intern__container" style={{ marginBottom: "30px" }}>
                    {
                        records.map((item) => {
                            return (
                                <>
                                    <div className='skills__frontend'>
                                        <h1>Title : {item.title}</h1>
                                        <h3> {item.date}</h3>
                                        <h2>company :{item.company}</h2>
                                    </div>
                                </>
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
            </section>
        </>
    )
}

export default Internships