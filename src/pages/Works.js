import React from "react";
import textureImg from "../resources/images/background_texture.png";
import Star from "../resources/images/star-2.png";
import nextIcon from "../resources/images/Next_icon.svg";
import "../styles/Works.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import WorkData from "./data/WorkData";
import Navbar from "../components/Navbar";

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Work | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar/>
      <section className="project_area">
        <div className="container">
          <h1 className="section_heading" data-aos="fade-up">
            <img src={Star} alt="star" />
            All Projects
            <img src={Star} alt="star" />
          </h1>
          <div className="row">
            {WorkData.map((work) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="zoom-in"
                key={work.slug}
              >
                <div className="project_item shadow_box">
                  <Link
                    className="overlay_link"
                    to={`/work-details/${work.slug}`}
                  ></Link>
                  <img src={textureImg} alt="" className="bg_img" />
                  <div className="project_img">
                    <img src={work.image} alt="project1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project_info">
                      <h1>{work.name}</h1>
                    </div>
                    <Link
                      to={`/work-details/${work.slug}`}
                      className="project_btn"
                    >
                      <img src={nextIcon} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Works;
