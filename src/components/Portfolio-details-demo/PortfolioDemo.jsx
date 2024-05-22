import React from 'react'
import { useParams, Link } from 'react-router-dom'
import doctor from '../../video/doc.mp4'
import expense from '../../video/1.mkv'
import groupChat from '../../video/groupchat.mp4'
import pizza from '../../video/pizza-app.mp4';
import blood from '../../video/blood-app.mp4';
import profile1 from '../../video/profile-app.mp4';
import oneChat from '../../video/oneChat.mp4';
import expense1 from '../../video/expense-app.mp4'



const PortfolioDemo = () => {
    const { id } = useParams()
    const portfolioDemoData = [
        {
            id: 6,
            video: expense,
            title: "Expense Tracker",

        },
        {
            id: 5,
            video: groupChat,
            title: "Group Chat Application"
        }, {
            id: 2,
            title: "E-commerce Website"
        }, {
            id: 1,
            title: "Booking Appointment App"
        }, {
            id: 3,
            title: "Quiz Application"
        }, {
            id: 4,
            title: "job Portal App"
        }, {
            id: 7,
            video: profile1,
            title: "Profile Update App"
        },
        {
            id: 8,
            video: pizza,
            title: "Food Delivery App"
        }, {
            id: 9,
            video: oneChat,
            title: "one to one Chat App"
        }, {
            id: 10,
            video: expense1,
            title: "Expense Tracker App"

        }, {
            id: 11,
            video: blood,
            title: "Blood Bank App"
        }, {
            id: 12,
            video: doctor,
            title: "Doctor Appointment App"
        }
    ]
    const portfolioDemoDataFilter = portfolioDemoData.filter(item => Number(item.id) === Number(id))[0]
    return (
        <div className="container portfolio__container1">


            <div className='prj-details'>
                <Link to="/" className="btn btn-primary">Home</Link>
                <h2 className='details-portfolio'>{portfolioDemoDataFilter.title}</h2>
                <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
            </div>
            <div class="container mb-5">
                <div class="row">

                    <div class="col-md-4">
                        <h1>Demo Video</h1>
                        {
                            portfolioDemoDataFilter.video && <>
                                <video width="1000" height="500" controls>
                                    <source src={portfolioDemoDataFilter.video} />
                                </video>
                            </>
                        }
                        {
                            !portfolioDemoDataFilter.video && <>
                                <h1 style={{ color: "gold" }}>Not updated</h1>
                            </>
                        }


                    </div>
                </div>
            </div>
            <Link to="/portfolio" className="btn btn-primary">Go Back</Link>
        </div>
    )
}

export default PortfolioDemo