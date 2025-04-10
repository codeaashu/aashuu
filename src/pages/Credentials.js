import React from "react";
import Navbar from "../components/Navbar";
import Pradip from "../aashuu/profilebw.jpg";
import textureImg from "../resources/images/background_texture.png";
import "../styles/Credentials.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Credentials = () => {
  return (
    <>
      <Helmet>
        <title>About | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar />
      <section className="credential_area">
        <div className="container">
          <div className="gx-row d-flex">
            <div className="credential_sidebar_wrap" data-aos="zoom-in">
              <div className="credential_sidebar text-center">
                <div className="shadow_box">
                  <img src={textureImg} alt="" className="bg_img" />
                  <div className="img_box">
                    <img src={Pradip} alt="About Me" />
                  </div>
                  <h2>Ashutosh Kumar</h2>
                  <p>@aashuu</p>
                  <ul className="social_links d-flex justify-content-center">
                  <li>
                      <Link
                        to="https://www.devdisplay.org/profile/codeaashu"
                        target="_blank"
                      >
                        <img
                          src="../aashuu/DevDisplay.png"
                          alt="DevDisplay"
                          width="32px"
                          height="32px"
                          className="DevDisplay-icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://github.com/codeaashu"
                        target="_blank"
                      >
                        <svg
                          width="16px"
                          height="16px"
                          strokeWidth="1.6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#FFFFFF"
                        >
                          <path
                            d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/ashutoshkumaraashu/"
                        target="_blank"
                      >
                        <svg
                          width="16px"
                          height="16px"
                          strokeWidth="1.6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#FFFFFF"
                        >
                          <path
                            d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/warrior_aashuu" target='_blank'>
                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </Link>
                    </li>
                  </ul>
                  <NavLink to="/contact" className="theme_btn">
                    <img src={textureImg} alt="" className="bg_img" />
                    Contact Me
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="credential_content flex-1">
              <div className="credential_about" data-aos="zoom-in">
                <h2>About Me</h2>
                <p>
                I'm a dedicated last year BCA student at Aryabhatta Knowledge University. Fueled by a passion for becoming a Software Developer, I'm actively learning new technologies, computer science fundamentals, and programming languages. I'm eager to leverage my strong programming skills, proven problem-solving abilities, and teamwork experience in a challenging and dynamic environment to tackle real-world problems. But, Mostly, I focus on Web design - Frontend Development because I give more priority to my creativity or interest and building websites that captivate my target audience and get clients.
                </p>
                <p>
                Specialization in Creative Full Stack Web Development & Designing. Pro in crafting captivating websites & apps. With a focus on user-centric design, creative development, and effective collaboration, I can elevate brand presence with my design expertise. Till Now I have built 50+ web apps. Most importantly, I'm a reliable designer you can rely on for all your design needs. Currently Building DevDisplay - Paradise For Developers!
                </p>
              </div>
              <div className="credential_edc_exp credential_experience">
                <h2 data-aos="fade-up">Experience</h2>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>JANUARY 2024 - MAY 2024</h4>
                  <h3>UI UX Designer & Web Developer</h3>
                  <h5>Advish Technology</h5>
                  <p>
                    As a UI/UX designer, I redesigned a mobile app for a
                    well-known e-commerce company. I conducted user research,
                    created wireframes and prototypes, and performed usability
                    testing with target users. The iterative design process
                    based on feedback led to a well-received final design,
                    resulting in increased user engagement and higher app
                    conversion rates. also built websites integrating seamless 
                    payment solutions with Next.js, TypeScript, and GSAP. 
                    Optimized performance and security, reducing load times 
                    by 2.5 seconds and increasing conversion rates by 25%. 
                    Implemented a scalable backend using NestJS and PostgreSQL, 
                    -ensuring robust data integrity.
                  </p>
                </div>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>JUNE 2024 - MARCH 2025</h4>
                  <h3>Web Developer & Designer</h3>
                  <h5>LPS Brands</h5>
                  <p>
                  Designed and developed a high-performance, responsive website 
                  for a local restaurant, ensuring seamless branding, user 
                  experience, and accessibility. Engineered the frontend with 
                  React.js, Next.js, and Tailwind CSS, optimizing performance 
                  and SEO to increase website traffic by 30% and improve page 
                  load speed by 40%. Built a robust backend using NestJS and 
                  Express.js, integrating PostgreSQL and Redis for efficient 
                  data management and caching. Implemented secure authentication 
                  with OAuth and JWT, enabling a seamless user experience. 
                  Managed API integrations, real-time order tracking, and s
                  calable deployment with Docker and AWS, ensuring high availability 
                  and performance. Conducted rigorous testing and monitoring, 
                  maintaining an uptime of 99.9% while enhancing conversion rates 
                  through strategic UI/UX refinements.
                  </p>
                </div>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>MARCH 2025 - Running</h4>
                  <h3>Product Engineer</h3>
                  <h5>LPS Brands</h5>
                  <p>
                  Architected and developed high-performance, scalable web applications 
                  for LPS Brands, enhancing user engagement and business efficiency. 
                  Led the development of a robust frontend using React.js, Next.js, 
                  and Tailwind CSS, ensuring a seamless and visually appealing UI 
                  with a 45% improvement in load times. Engineered a secure and 
                  scalable backend with NestJS and Express.js, integrating PostgreSQL 
                  and Redis for efficient data storage and caching, reducing query 
                  response times by 60%. Designed RESTful and GraphQL APIs, optimizing 
                  data flow between frontend and backend, while implementing JWT & 
                  OAuth authentication for secure user management. Spearheaded DevOps 
                  initiatives, deploying applications with Docker, Kubernetes, and 
                  AWS - EC2, S3, RDS, achieving 99.9% uptime and auto-scalability. 
                  Collaborated closely with UI/UX teams, data engineers, and stakeholders 
                  to drive a data-driven product strategy, leading to a 30% increase in 
                  user retention and 50% higher conversion rates.
                  </p>
                </div>
              </div>
              <div className="credential_edc_exp credential_education">
                <h2 data-aos="fade-up">Education</h2>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2020</h4>
                  <h3>MATRICULATION</h3>
                  <h5>RSCDS VIDYA MANDIR</h5>
                </div>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2020 - 2022</h4>
                  <h3>INTERMEDIATE - SCIENCE</h3>
                  <h5>+2 HIGH SCHOOL - BSEB</h5>
                </div>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2022 - 2025</h4>
                  <h3>Bachelor of Computer Applications</h3>
                  <h5>Aryabhatta Knowledge University</h5>
                </div>
              </div>
              <div className="skills_wrap">
                <h2 data-aos="fade-up">Skills</h2>
                <div className="d-grid skill_items flex-wrap">
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">Figma</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">HTML5</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">CSS3</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Responsive Web Design</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">JavaScript</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">React js</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">TypeScript</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Adobe</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">AI Tools</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Prompt Engineering</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Next.js</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">Tailwind</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">SASS</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">GSAP</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">Anime.js</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">70%</span>
                    <h3 className="name">Three.js</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">Framer Motion</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Node.JS</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">Express.JS</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">Django</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">Flask</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">RESTful APIs</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">GraphQL</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">MySQL</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">MongoDB</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">Redis</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">PostgreSQL</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">Git</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">GitHub</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">90%</span>
                    <h3 className="name">GitLab</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">Docker</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">Kubernetes</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">Jenkins</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">95%</span>
                    <h3 className="name">GitHub Actions</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">AWS</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">Firebase</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">DigitalOcean</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">80%</span>
                    <h3 className="name">WebFlow - Framer</h3>
                  </div>
                  <div className="skill_item" data-aos="zoom-in">
                    <span className="percent">85%</span>
                    <h3 className="name">Python</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Credentials;
