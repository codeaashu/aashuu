import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import nextIcon from '../resources/images/Next_icon.svg'
import camera from '../resources/images/Camera.svg'
import design from '../resources/images/design-nib.svg'
import figma from '../resources/images/figma.svg'
import code from '../resources/images/dev-mode-laptop.svg'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const AboutMe = () => {
    return (
        <div className="info_box shadow_box" >
            <Link to="/service" className='overlay_link'></Link>
            <img src={textureImg} alt="bg" className='bg_img' />
            <div className="icon_boxes">
                <img src={camera} alt="camera" />
                <img src={figma} alt="figma" />
                <img src={design} alt="design" />
                <img src={code} alt="code" />
            </div>
            <div className="d-flex align-items-end justify-content-between">
                <div className="infos">
                    <h4>SPECIALIZATION</h4>
                    <h1>Services Offering</h1>
                </div>
                <Link to="/service" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                </Link>
            </div>
        </div>
    )
}

export default AboutMe
