import React from 'react'
import './Education.css'
import Navbar from '../Navbar/Navbar'
import CollegeImg from '../../assets/images/college.jpg'
import Footer from '../Footer/Footer'

const Education = () => {
    return (
        <>
            <Navbar />
            <div class="education" id="education">
                <h1 class="heading"><i class="fas fa-graduation-cap"></i> My <span>Education</span></h1>
                <p class="qoute">Education is not the learning of facts, but the training of the mind to think.</p>
                <div class="box-container">
                    <div class="box">
                        <div class="image">
                            <img draggable="false" src={CollegeImg} alt="" />
                        </div>
                        <div class="content">
                            <h3>Bachelor of Computer Application</h3>
                            <p>Modern College of Arts, Science and Commerce, Ganeshkhind, Pune-16</p>
                            <h4>2020-2023 | Completed</h4>
                        </div>
                    </div>

                    {/* <div class="box">
                        <div class="image">
                            <img draggable="false" src="./assets/images/educat/rambhawan.jpg" alt="" />
                        </div>
                        <div class="content">
                            <h3>Higher Secondary School</h3>
                            <p>Anjuman Islam Janjira Jr. College of Arts, Commerce and Science, Mhasla</p>
                            <h4>2018-2020 | Completed</h4>
                        </div>
                    </div> */}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Education
