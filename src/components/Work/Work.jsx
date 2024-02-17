import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Work.css'
import workData from './WorkData'
import Footer from '../Footer/Footer'

const Work = () => {
    return (
        <>
            <Navbar />
            <div class="work" id="work">
                <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects <span>Made</span></h2>
                <div class="box-container">
                    {workData.map(item => (
                        <div className="box tilt" key={item.name}>
                            <img draggable="false" src={item.image} alt="project" />
                            <div className="content">
                                <div className="tag">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="desc">
                                    <p>{item.desc}</p>
                                    <div className="btns">
                                        <a href={item.links.view} className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
                                        <a href={item.links.code} className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div class="viewall">
                    <a href="/projects" class="btn"><span>View All</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default Work
