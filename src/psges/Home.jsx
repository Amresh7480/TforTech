import React from 'react'
import './home.css';
import Header from '../common/Header';
import { CiCircleChevDown } from "react-icons/ci";
import readImg from '../images/images.jpeg'
import Footer from '../common/Footer';

export default function Home() {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }
    return (
        <div>
            <Header />
            {/* ---------------------bainer Section start------------- */}
            <section className="container-fluid bainer_section px-0">
                <div className="bainer_overlay d-flex ali justify-content-center align-items-center">
                    <h1 className='text-center'>
                        Lorem Ipsum is simply <br /> dummy text <br /><br />
                        <span className='text-light' onClick={handleScroll}><CiCircleChevDown /> <p>Scroll down</p> </span>
                    </h1>
                </div>
            </section>
            {/* ---------------------Opportunity Section start------------- */}
            <section className="opportunity_section container-fluid">
                <div className="container">
                    <div className="row">
                        <h2>
                            Opportunity for all.
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                        <div className='opportunity_section_btn'>
                            <button>Request Info</button>
                            <button>Schedule a Visit</button>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------FINANCIAL Section start------------- */}
            <section className='financial_section container-fluid px-0'>
                <div className='bainer_overlay d-flex ali justify-content-center align-items-center py-lg-0 py-5'>
                    <div className="container">
                        <div className="row text-light text-center">
                            <h2>
                                Lorem Ipsum is simply dummy text
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                            </p>
                            <div className='financial_section_btn'>
                                <button>FINANCIAL AID WITHOUT LOANS</button>
                                <button>AFFORD Brainiacs</button>
                                <button>NET PRICE CALCULATOR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------reading Section start------------- */}
            <section className="read_section container-fluid">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <h2>
                                    Lorem Ipsum is simply dummy text of the printing.
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                </p>
                                <button>WHY Brainiacs</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid' src={readImg} alt="" />
                        </div>
                    </div>
                    <div className="row gy-4 pt-3">
                        <div className="col-lg-5">
                            <img className='img-fluid' src={readImg} alt="" />
                        </div>
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className='pt-5'>
                                <h2>
                                    Lorem Ipsum is simply dummy text of the
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                </p>
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------unlikely Section start------------- */}
            <section className="opportunity_section container-fluid">
                <div className="container">
                    <div className="row">
                        <h2>
                            An unlikely place to start an <br /> unforgettable journey.
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </div>
                </div>
            </section>
            {/* ---------------------school Section start------------- */}
            <section className='financial_section container-fluid px-0'>
                <div className='bainer_overlay d-flex ali justify-content-center align-items-center py-lg-0 py-5'>
                    <div className="container">
                        <div className="row text-light text-center">
                            <h1>
                                Lorem Ipsum is simply<br /> dummy text
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                            </p>
                            <div className='financial_section_btn'>
                                <button>START THE TOUR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------school Section start------------- */}
            <section className="colloge_section read_section container-fluid py-5">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <img className='img-fluid' src={readImg} alt="" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <h2>
                                    Lorem Ipsum is simply dummy text of the printing
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                </p>
                                <button>FINANCIAL AID</button>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 py-3">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <h2>
                                    Lorem Ipsum is simply dummy text of the printing
                                </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                </p>
                                <button>Meet our staff</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className='img-fluid' src={readImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------counter Section start------------- */}
            <section className="counter_section">
                <div className="container counter_main ">
                    <div className="counter_items">
                        <h3>
                            1,700 students
                        </h3>
                        <div className='center_border'></div>
                        <p>
                            We're a small but powerful community.
                        </p>
                    </div>
                    <div className="counter_items">
                        <h3>
                        3,000 internship opportunities
                        </h3>
                        <div className='center_border'></div>
                        <p>
                        That's more opportunities than enrollees.
                        </p>
                    </div>
                    <div className="counter_items">
                        <h3>
                            500+
                        </h3>
                        <div className='center_border'></div>
                        <p>
                        Free Events, Lectures, Performances, and Symposia Each Year
                        </p>
                    </div>
                </div>
            </section>
            {/* ---------------------bottom contact Section start------------- */}
            <section className="container-fluid bottom_contact_section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2>
                                Wanna Talk With us
                            </h2>
                            <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <button className='rounded-pill'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
