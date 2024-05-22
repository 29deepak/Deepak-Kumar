import React from 'react'
import './Testimonial.css'
import Avatar from '../../assets/avatar.png'


import { Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    const data = [
        {
            id: 1,
            name: "Abhishek Kumar",
            review: 'The 100% customizable nature of the templates provides you with the desired flexibility to edit your presentations. The content-ready slides give you the much-needed structure.'
        },
        {
            id: 2,
            name: "Pranay Pankaj",
            review: 'Organizations, therefore, need a new approach to project management, and executives require skills and a project-driven organizational structure to monitor and assess the progress and growth of operations. '
        },
        // {
        //     id: 3,
        //     name: "XYZ",
        //     review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ab atque, deserunt, exercitationem eligendi a inventore architecto eos fuga iure explicabo animi maxime voluptates cumque. Ab saepe porro optio similique!.'
        // },
        // {
        //     id: 4,
        //     name: "WUV",
        //     review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ab atque, deserunt, exercitationem eligendi a inventore architecto eos fuga iure explicabo animi maxime voluptates cumque. Ab saepe porro optio similique!.'
        // }
    ]
    return (
        <section id="testimonials">
            <h5>Review From clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials_container'
                modules={[Pagination, Scrollbar]}
                spaceBetween={45}
                slidesPerView={1}
                Scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ id, name, review }) => {
                        return (
                            <SwiperSlide className='testimonial' key={id}>
                                <div className='client_avatar'>
                                    <img src={Avatar} alt="avatar" />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>{review}</small>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    )
}

export default Testimonial