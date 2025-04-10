import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import Pradip from '../aashuu/profilebw.jpg'
import Star from '../resources/images/star-2.png'
import StarIcon from '../resources/images/star-icon.png'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import '../styles/MoreAboutMe.css'
import nextIcon from '../resources/images/Next_icon.svg'
import AboutMe from '../components/AboutMe'
import WorkTogether from '../components/WorkTogether'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const MoreAboutMe = () => {

    return (
        <>
            <Helmet>
                <title>
                    About | {process.env.REACT_APP_APP_NAME}
                </title>
            </Helmet>
            <Navbar />
            <section className="about_area">
                <div className="container">
                    <div className='d-flex about_me_wrap align-items-end mb-30'>
                        <div className="about_image_box shadow_box" data-aos="zoom-in">
                            <img src={textureImg} alt="BG" className="bg_img" />
                            <div className="image_inner">
                                <img src={Pradip} alt="About Me" />
                            </div>
                        </div>
                        <div className="about_details" data-aos="zoom-in">
                            <h1 className='section_heading' data-aos="fade-up">
                                <img src={Star} alt="star" />
                                SELF SUMMARY
                                <img src={Star} alt="star" />
                            </h1>
                            <div className='about_details_inner shadow_box'>
                                <img src={StarIcon} alt="bg" className='star_icon' />
                                <h1>Ashutosh Kumar</h1>
                                <p>Creative Full Stack Web Developer & Designer specializing in crafting captivating websites & apps. With a focus on user-centric design, creative development, and effective collaboration, I can elevate brand presence with my design expertise. Till Now I have built 50+ web apps. Most importantly, I'm a reliable designer you can rely on for all your design needs. Currently Building DevDisplay - Paradise For Developers!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EXPERIENCE</h3>
                                <ul>
                                    <li>
                                        <p className="date">JANUARY 2024 - MAY 2024</p>
                                        <h2>UI UX Designer & Web Developer</h2>
                                        <p className="type">Advish Technology</p>
                                    </li>
                                    <li>
                                        <p className="date">JUNE 2024 - MARCH 2025</p>
                                        <h2>Web Developer & Designer</h2>
                                        <p className="type">LPS Brands</p>
                                    </li>
                                    <li>
                                        <p className="date">MARCH 2025 - Running</p>
                                        <h2>Product Engineer</h2>
                                        <p className="type">LPS Brands</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EDUCATION</h3>
                                <ul>
                                    <li>
                                        <p className="date">2020</p>
                                        <h2>MATRICULATION</h2>
                                        <p className="type">RSCDS VIDYA MANDIR</p>
                                    </li>
                                    <li>
                                        <p className="date">2020 - 2022</p>
                                        <h2>INTERMEDIATE - SCIENCE</h2>
                                        <p className="type">+2 HIGH SCHOOL - BSEB</p>
                                    </li>
                                    <li>
                                        <p className="date">2022 - 2025</p>
                                        <h2>Bachelor of Computer Applications</h2>
                                        <p className="type">Aryabhatta Knowledge University</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <div className="info_box shadow_box">
                                <img src={textureImg} alt="bg" className='bg_img' />
                                <div className='inner_profile_icons inner_profile_icons_2 shadow_box'>
                                    <Link to="https://www.linkedin.com/in/ashutoshkumaraashu/" target='_blank'>
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                    <Link to="https://github.com/codeaashu" target="_blank">
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>STAY WITH ME</h4>
                                        <h1>Profiles</h1>
                                    </div>
                                    <Link to="/contact" className="about_btn">
                                        <img src={nextIcon} alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <WorkTogether />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MoreAboutMe

