import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>Atharv's Portfolio</h3>
                    <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <Link to="/"><i className="fas fa-chevron-circle-right"></i> home</Link>
                    <Link to="/about"><i className="fas fa-chevron-circle-right"></i> about</Link>
                    <Link to="/skills"><i className="fas fa-chevron-circle-right"></i> skills</Link>
                    <Link to="/education"><i className="fas fa-chevron-circle-right"></i> education</Link>
                    <Link to="/work"><i className="fas fa-chevron-circle-right"></i> work</Link>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <p> <i className="fas fa-phone"></i>+91 9370755714</p>
                    <p> <i className="fas fa-envelope"></i>karnekaratharv12@gmail.com</p>
                    <p> <i className="fas fa-map-marked-alt"></i>Shriwardhan, India - 402110</p>
                    <div className="share">

                        <a href="" className="fab fa-linkedin"
                            aria-label="LinkedIn" target="_blank"></a>
                        <a href="" className="fab fa-github" aria-label="GitHub"
                            target="_blank"></a>
                        <a href="mailto:karnekaratharv12@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank"></a>
                    </div>
                </div>
            </div>

            <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a
                href=""> Atharv Karnekar</a></h1>

        </div>
    )
}

export default Footer
