import React from 'react'
import './PortfolioImages.css'

//expense
import exp1 from '../../expenses/images/1.png'
import exp2 from '../../expenses/images/2.png'
import exp3 from '../../expenses/images/3.png'
import exp4 from '../../expenses/images/4.png'
import exp5 from '../../expenses/images/5.png'
import exp6 from '../../expenses/images/6.png'
import { Link, useParams } from 'react-router-dom';
//doctor
import doc1 from '../../doc-app/1.png'
import doc2 from '../../doc-app/2.png'
import doc3 from '../../doc-app/3.png'
import doc4 from '../../doc-app/4.png'
import doc5 from '../../doc-app/5.png'
import doc6 from '../../doc-app/6.png'
import doc7 from '../../doc-app/7.png'
import doc8 from '../../doc-app/8.png'
import doc9 from '../../doc-app/9.png'
import doc10 from '../../doc-app/10.png'
//profile
import prf1 from '../../profile-update/1.png'
import prf2 from '../../profile-update/2.png'
import prf3 from '../../profile-update/3.png'
import prf4 from '../../profile-update/4.png'
import prf5 from '../../profile-update/5.png'

//blood-bank

import blood1 from '../../blood-bank/1.png'
import blood2 from '../../blood-bank/2.png'
import blood3 from '../../blood-bank/3.png'
import blood4 from '../../blood-bank/4.png'
import blood5 from '../../blood-bank/5.png'
import blood6 from '../../blood-bank/6.png'
import blood7 from '../../blood-bank/7.png'
import blood8 from '../../blood-bank/8.png'
import blood9 from '../../blood-bank/9.png'
import blood10 from '../../blood-bank/10.png'

// expense-1

import expe1 from '../../epense-trac/1.png'
import expe2 from '../../epense-trac/2.png'
import expe3 from '../../epense-trac/3.png'
import expe4 from '../../epense-trac/4.png'
import expe5 from '../../epense-trac/5.png'
import expe6 from '../../epense-trac/6.png'
import expe7 from '../../epense-trac/7.png'
import expe8 from '../../epense-trac/8.png'

//one to one chat
import oneChat1 from '../../oneChat/1.png'
import oneChat2 from '../../oneChat/2.png'
import oneChat3 from '../../oneChat/3.png'
import oneChat4 from '../../oneChat/4.png'
import oneChat5 from '../../oneChat/5.png'
import oneChat6 from '../../oneChat/6.png'

//groupChat

import groupChat1 from '../../groupChat/1.png'
import groupChat2 from '../../groupChat/2.png'
import groupChat3 from '../../groupChat/3.png'
import groupChat4 from '../../groupChat/4.png'
import groupChat5 from '../../groupChat/5.png'
import groupChat6 from '../../groupChat/6.png'
import groupChat7 from '../../groupChat/7.png'
import groupChat8 from '../../groupChat/8.png'

//food-delivery---

import pizza1 from '../../pizza/1.png'
import pizza2 from '../../pizza/2.png'
import pizza3 from '../../pizza/3.png'
import pizza4 from '../../pizza/4.png'
import pizza5 from '../../pizza/5.png'
import pizza6 from '../../pizza/6.png'
import pizza7 from '../../pizza/7.png'
import pizza8 from '../../pizza/8.png'
import pizza9 from '../../pizza/9.png'
import pizza10 from '../../pizza/10.png'
import pizza11 from '../../pizza/11.png'
import pizza12 from '../../pizza/12.png'
import pizza13 from '../../pizza/13.png'


const PortfolioImages = () => {
    const { id } = useParams()
    const portfolioImage = [
        {
            id: 6,
            title: "Expense Tracker",
            images: [{ title: "SignUp Page", image: exp1 }, { title: "Bcrypt Password", image: exp2 }, { title: "Login Page", image: exp3 }, { title: "Expense Tracker Add Details", image: exp4 },
            { title: "RazorPay", image: exp5 }, { title: "LeaderBoard", image: exp6 }]
        }, {
            id: 2,
            title: "E-commerce Website",
            images: [{ title: "not Updated" }]
        }, {
            id: 1,
            title: "BOOKING APPOINTMENT APP",
            images: [{ title: "not updated" }]
        }, {
            id: 3,
            title: "Quiz Application",

        }, {
            id: 4,
            title: "Job Portal App",

        }, {
            id: 5,
            title: "Group Chat Application",
            images: [{ title: "Register Form", image: groupChat1 }, { title: "Login Form", image: groupChat2 }, { title: "one to one chat", image: groupChat3 }, { title: "click on the person talks one to one chat", image: groupChat4 }, { title: "create a new group, list of all contacts, list of all groups", image: groupChat5 }, { title: "add members to add amin and add user and remove from the group those who are admin.", image: groupChat6 }, { title: "paasword are in bcrypt form", image: groupChat7 }, { title: "Group caht target to any group then talks to all members in the group.", image: groupChat8 },]
        }, {
            id: 7,
            title: "Profile Update APP",
            images: [{ title: "Register Page", image: prf1 }, { title: "username & password", image: prf2 }, { title: "update profile", image: prf3 }, { title: "update Details", image: prf4 }, { title: "Recover password", image: prf5 }]
        }, {
            id: 8,
            title: "Food Delivery App",
            images: [{ title: "Register Page", image: pizza1 }, { title: "Login Page", image: pizza2 }, { title: "Dashboard ", image: pizza3 }, { title: "all items", image: pizza4 }, { title: "user page", image: pizza5 }, { title: "cart", image: pizza6 }, { title: "pop up Description & images", image: pizza7 }, { title: "Description", image: pizza8 }, { title: "Admin", image: pizza9 }, { title: "user list", image: pizza10 }, { title: "all pizzas", image: pizza11 }, { title: "Add New Pizza", image: pizza12 }, { title: "Order List", image: pizza13 }]
        }, {
            id: 9,
            title: "One to One Chat App",
            images: [{ title: "Login Form", image: oneChat1 }, { title: "Register Form", image: oneChat2 }, { title: "person 1(deepak)", image: oneChat3 }, { title: "person 1(deepak) talk to person 2  (kunal) ", image: oneChat4 }, { title: "person 2(kunal)", image: oneChat5 }, { title: "person2(kunal) to person 1(deepak)", image: oneChat6 }]
        }, {
            id: 10,
            title: "Expense Tracker App",
            images: [{ title: "Login Form", image: expe1 }, { title: "Register Form", image: expe2 }, { title: "Expense Tracker(1 week,1 month,1year,custom)", image: expe3 }, { title: "Last 1 year", image: expe4 }, { title: "Custom Dates", image: expe5 }, { title: "Analysis of totalincome, total turnover in which product who spent in(1week,1month,1year,custom)", image: expe6 }, { title: "filter your income and expenses", image: expe7 }, { title: "Add your tansaction Details", image: expe8 }]
        }, {
            id: 11,
            title: "Blood Bank App",
            images: [{ title: "Donor Registartion", image: blood1 }, { title: "Admin Registartion", image: blood2 }, { title: "Organisation Registartion", image: blood3 }, { title: "Hospital Registration", image: blood4 }, { title: "Login Page", image: blood5 }, { title: "Inventory Page Available for that organisation", image: blood6 }, { title: "Total Donor Available for that organisation", image: blood7 }, { title: "Total Hospital Available for organisation", image: blood8 }, { title: "Blood group Available in analytics", image: blood9 }, { title: "Recent 3 Blood Transactions", image: blood10 }]
        }, {
            id: 12,
            title: "Doctor Appointment App",
            images: [{ title: "Signup Page", image: doc1 }, { title: "Login Page", image: doc2 }, { title: "Home Page", image: doc3 }, { title: "Appointments List", image: doc4 }, { title: "Apply Doctor", image: doc5 }, { title: "Home Page", image: doc6 }, { title: "Doctors Appointments", image: doc7 }, { title: "Manage Profile", image: doc8 }, { title: "Doctors List", image: doc9 }, { title: "Notification Page", image: doc10 },]
        },

    ]
    const portfolioImagesFilter = portfolioImage.filter(item => Number(item.id) === Number(id))[0]
    return (
        <>
            <div className='prj-details'>
                <Link to="/" className="btn btn-primary">Home</Link>
                <h2 className='details-portfolio'>{portfolioImagesFilter.title}</h2>
                <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
            </div>
            <h1 style={{ textAlign: "center" }}>Demo screenshot of my {portfolioImagesFilter.title} project</h1>
            <div className='container image-container'>

                {
                    portfolioImagesFilter.images && portfolioImagesFilter.images.map((item, i) => {
                        return (
                            <div className='border-1'>
                                <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                                <img src={item.image} alt="" />
                            </div>
                        )
                    })
                }
                {
                    !portfolioImagesFilter.images && <>
                        <h1 style={{ color: "gold" }}>Not updated</h1></>
                }

            </div>
            <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
        </>
    )
}

export default PortfolioImages