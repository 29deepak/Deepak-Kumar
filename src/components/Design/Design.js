import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './Design.css'
import { FaArrowRight } from "react-icons/fa";
const Design = () => {
    return (
        <>
            <Header />
            <section id='skills'>
                <h2> My Designs Which I Hosted</h2>
                <div className="container experience__container">
                    <div className='experience__frontend'>
                        <div className="experience__content">

                            <article className='experience__details'>
                                <div>

                                    <h2><FaArrowRight /><a href="https://gilded-rugelach-44fb67.netlify.app/" target='_blank'>Link 1</a>[Form , Trial Input(smaller,Meduim,Bigger)]</h2>
                                    <h2><FaArrowRight /><a href="https://64b176667a9b593947992344--lovely-bunny-9a7799.netlify.app/" target='_blank'>Link 2</a>[signup,login,card,card group,video set up ]</h2>

                                    <h2><FaArrowRight /><a href="https://64b1973930412d4ff8833d9f--calm-kataifi-bad013.netlify.app/" target='_blank'>Link 3</a>[Media Object,Badges,Progress Bar,Spinners,Jumbotron]</h2>

                                    <h2><FaArrowRight /><a href="https://64b3ef6e3071ba37fe8784d0--subtle-praline-ffaf66.netlify.app/#" target='_blank'>Link 4</a>[carousel,alert,Modal,card,Table,Animation,Position]</h2>

                                    <h2><FaArrowRight /><a href="https://company-deepak.netlify.app/" target='_blank'>Link 5</a>[company design [header,image,testimonials,latest news,Footer]]</h2>

                                    <h2><FaArrowRight /><a href="https://29deepak.github.io/deepak-portfolio/" target='_blank'>Link 6</a>[My 2nd Portfolio]</h2>


                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Design