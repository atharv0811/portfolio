import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HomeImg from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home" id="home">
                <div className="content">
                    <h2>Hi There,<br /> I'm Atharv <span>Karnekar</span></h2>
                    <p>i am into{" "}
                        <span className="typing-text">
                            <Typewriter
                                words={["frontend development", "backend development", "web development", "Freelancing"]}
                                loop
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                    <Link to="/about" className="btn"><span>About Me</span>
                        <i className="fas fa-arrow-circle-right"></i>
                    </Link>
                    <div className="socials">
                        <ul className="social-icons">
                            <li>
                                <a className="linkedin" aria-label="LinkedIn" href="" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a className="github" aria-label="GitHub" href="" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="abhishek_9036" height="30" width="40" />
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/geeks-for-geeks.svg" alt="https://auth.geeksforgeeks.org/user/abhishekchauhan9036/profile" height="30" width="40" />
                                </a>
                            </li>
                            <li>
                                <a href="" target="blank">
                                    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="abhishekchauha22" height="30" width="40" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    <img draggable="false" className="tilt" src={HomeImg} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
