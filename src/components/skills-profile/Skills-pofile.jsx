import React, { useState } from 'react'
import './Skills-profile.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skillsData = [
    {
      id: 1,
      heading: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "BootStrap", "Ant-Design", "React JS"]
    }, {
      id: 2,
      heading: "Backend Development",
      skills: ["Node JS", "Express JS", "SQL", "PL-SQL", "DBMS", "Sequelize", "Mongo DB", "Mongoose"]
    }, {
      id: 3,
      heading: "Cloud",
      skills: ["AWS", "MS Teams", "MS Azure"]
    },
    {
      id: 4,
      heading: "Other Skills",
      skills: ["Python", "Data Structure & Algorithms", "OOPS", "REST API", "Operating System", "Networking", "UNIX"]
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
    <section id='skills'>
      <h5> What Skills I Have</h5>
      <h2> My Skills</h2>
      <div className=" container  " style={{ marginBottom: "30px" }}>
        <ul className="pagination-list1">
          {numbers.map((item, i) => (
            <li key={i} className={`${Number(currentPage) === Number(item) ? 'active' : ""}`} onClick={() => handlePage(item)}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="container skills__container" style={{ marginBottom: "30px" }}>
        {
          records.map((item) => {
            return (
              <>
                <div className='skills__frontend'>
                  <h3>{item.heading}</h3>

                  <div className="skills__content">
                    {
                      item.skills.map((item) => {
                        return (
                          <>
                            <article className='skills__details'>
                              <BsPatchCheckFill className='skills__details-icon' />
                              <div>
                                <h4>{item}</h4>
                              </div>
                            </article>

                          </>
                        )
                      })
                    }
                  </div>
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

  )
}

export default Skills