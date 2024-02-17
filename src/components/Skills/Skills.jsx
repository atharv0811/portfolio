import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Skills.css'
import Data from './SkillData'
import Footer from '../Footer/Footer'

const Skills = () => {
    return (
        <>
            <Navbar />
            <div className="skills" id="skills">

                <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

                <div className="container">
                    <div className="row" id="skillsContainer">
                        {Data.map(item => (
                            <div className='bar' key={item.name}>
                                <div className='info'>
                                    <img src={item.icon} alt="" />
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Skills
