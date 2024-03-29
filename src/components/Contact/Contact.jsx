import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import Img from '../../assets/images/contact1.png'
import Footer from '../Footer/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div class="contact" id="contact">

                <h2 class="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

                <div class="container">
                    <div class="content">
                        <div class="image-box">
                            <img draggable="false" src={Img} alt="" />
                        </div>
                        <form id="contact-form">

                            <div class="form-group">
                                <div class="field">
                                    <input type="text" name="name" placeholder="Name" required />
                                    <i class='fas fa-user'></i>
                                </div>
                                <div class="field">
                                    <input type="text" name="email" placeholder="Email" required />
                                    <i class='fas fa-envelope'></i>
                                </div>
                                <div class="field">
                                    <input type="text" name="phone" placeholder="Phone" />
                                    <i class='fas fa-phone-alt'></i>
                                </div>
                                <div class="message">
                                    <textarea placeholder="Message" name="message" required></textarea>
                                    <i class="fas fa-comment-dots"></i>
                                </div>
                            </div>
                            <div class="button-area">
                                <button type="submit">
                                    Submit <i class="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
