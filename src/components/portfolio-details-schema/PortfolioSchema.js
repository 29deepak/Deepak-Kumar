import React from 'react'
import './PortfolioSchema.css'
import EXP1 from '../../expenses/images/expenseSchema.png'
import doc1 from '../../doc-app/schema.png'
import groupChat from '../../groupChat/grp-chat.png'
import profile1 from '../../profile-update/basic-details.png'
import pizza from '../../pizza/pizzaApp.png'
import expense1 from '../../epense-trac/expense-app.png'
import blood from '../../blood-bank/blood-bank.png'
import oneChat from '../../oneChat/oneChatApp.png'
import { Link, useParams } from 'react-router-dom'
const PortfolioSchema = () => {
    const { id } = useParams()
    let portfolioSchema = [
        {
            id: 6,
            title: "Expense Tracker",
            image: EXP1
        }, {
            id: 2,
            title: "E-commerce Website",
        }, {
            id: 1,
            title: "Booking Appointment App"
        }, {
            id: 4,
            title: "Job Portal App"
        }, {
            id: 3,
            title: 'Quiz Application'
        }, {
            id: 5,
            title: 'GROUP CHAT APPLICATION',
            image: groupChat
        }, {
            id: 7,
            image: profile1,
            title: "Profile Update App"
        },
        {
            id: 8,
            image: pizza,
            title: "Food Delivery App"
        }, {
            id: 9,
            image: oneChat,
            title: "one to one Chat App"
        }, {
            id: 10,
            image: expense1,
            title: "Expense Tracker App"

        }, {
            id: 11,
            image: blood,
            title: "Blood Bank App"
        }, {
            id: 12,
            title: "Doctor Appointment App",
            image: doc1
        }
    ]


    const portfolioSchemaFilter = portfolioSchema.filter(item => Number(item.id) === Number(id))[0]
    return (
        <>
            <div className='prj-details'>
                <Link to="/" className="btn btn-primary">Home</Link>
                <h2 className='details-portfolio'>{portfolioSchemaFilter.title}</h2>
                <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
            </div>
            <div className='conatiner schema-container' >
                <h1>{portfolioSchemaFilter.title} Schema</h1>
                {
                    portfolioSchemaFilter.image && <>
                        <img src={portfolioSchemaFilter.image} alt="" />
                    </>
                }{
                    !portfolioSchemaFilter.image && <>
                        <h1 style={{ color: "gold" }}>Not updated</h1>
                    </>
                }

                <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
            </div>
        </>
    )
}

export default PortfolioSchema