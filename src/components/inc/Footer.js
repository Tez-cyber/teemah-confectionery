import React, { Component } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

export default class Footer extends Component {
    render() {
        return(
            <footer class="footer" id="footer">
                <Fade up cascade>
                    <div class="container">
                        <div class="row footer-row">
                            <div class="footer-item">
                                <h3>Our Location</h3>
                                <p>Gbokoniyi, lecturer bus stop,
                                    <br />Abeokuta
                                </p>
                            </div>
                            <div class="footer-item">
                                <h3>Opening Hours</h3>
                                <p>Monday to Sunday
                                    <br />9:00AM - 10PM
                                </p>
                            </div>
                            <div class="footer-item">
                                <h3>Contact Us</h3>
                                <p>+2347059269642</p>
                                <p>bisolatiamiyu3@gmail.com</p>
                                <div class="social-links">
                                    {/* <Link to="#"><FaFacebook /></Link> */}
                                    <a 
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https:instagram.com/teemah_confectionery?igshid=YmMyMTA2M2Y=">
                                            <FaInstagram />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://wa.me/+2349090288329"><FaWhatsapp /></a> 
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="copyright">
                                &copy; 2021 - Designed by Tez-Cyber
                            </div>
                        </div>
                    </div>
                </Fade>
            </footer>
        )
    }
}
