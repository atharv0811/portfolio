import React from 'react'
import Img from '../../assets/images/MyImg.jpg'
import "./About.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about" id="about">
                <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>

                <div className="row">
                    <div className="image">
                        <img draggable="false" className="tilt" src={Img} alt="" />
                    </div>
                    <div className="content">
                        <h3>Who am i?</h3>
                        <span className="tag">I'm Atharv Karnekar, a Fullstack Web Developer</span>

                        <p>I am Full Stack Developer based in India.
                            I have Completed Bachelor of Computer Application from Modern College of Arts, Science and Commerce, Pune.
                            I am very passionate about improving my coding skills & developing applications & websites.
                            I build WebApps and Websites using MERN Stack.
                            Working for myself to improve my skills.
                            Love to build Full-Stack clones. </p>

                        <div className="box-container">
                            <div className="box">
                                <p><span> email : </span> karnekaratharv12@gmail.com</p>
                                <p><span> place : </span> Shriwardhan, India - 402110</p>
                            </div>
                        </div>

                        <div className="resumebtn">
                            <a href="https://drive.google.com/file/d/1lnRnMkDLQ0jVWBQcJPF4aLZNZGJ6whoR/view?usp=sharing" target="_blank"
                                className="btn"><span>Resume</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
