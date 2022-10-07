import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../images/img-20.jpg'
import { FaTruck, FaCookieBite } from 'react-icons/fa'
import { BiFoodMenu } from 'react-icons/bi'
import Fade from "react-reveal/Fade"

export default class Home extends Component {
  render() {
    return (
      <>
        {/*------x-----Home Section start-------x------*/}
        <section class="home-section" id="home">
            <div class="home-bg"></div>
            <Fade up cascade>
                <div class="container">
                        <div class="row min-vh-100 align-items-center">
                                <div class="home-text">
                                    <h1>Teemah's confectionery</h1>
                                    <p>
                                        Home to various confectionery. 
                                        Crafting cuisines to customer's
                                        demands
                                    </p>
                                    <Link to="/menu" class="btn btn-default">
                                        Our menu
                                    </Link>
                                </div>
                        </div>
                </div>
            </Fade >
        </section>
        {/*------x-----Home Section End-------x------*/}
        {/*------x-----About Section start-------x------*/}
            <section class="about-section sec-padding" id="about">
                <Fade left cascade>
                    <div class="container">
                        <div class="row">
                            <div class="section-title">
                                <h2 data-title="our story">About Us</h2>
                            </div>
                        </div>
                        <div class="row about-row">
                            <div class="about-text">
                                <h3>Welcome To Teemah's Confectionery</h3>
                                <p>
                                    Every meal prepared is made with passion and 
                                    care by our dexterous chef and culinary team.
                                    Being more passionate than ever that we can truly change 
                                    people's lives with delicious and clean eating!
                                </p>
                                <p>
                                    Our mission is to prepare eating simple and convenient,
                                    making sure a customer never have to sacrifice, flavor,
                                    nutrition and most of all, QUALITY. Which is why we offer 
                                    the highest quality ingredients in our meals.
                                </p>
                                <Link to="/about" class="btn btn-default">See more</Link>
                            </div>
                            <div class="about-img">
                                <div class="img-box">
                                    <h3>10+ years Experience</h3>
                                    <img src={Img1} alt="about img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        {/*------x-----How It Works-------x------*/}
        <section className="work-section sec-padding" id="work">
            <Fade right cascade>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>How It Works</h2>
                        </div>
                    </div>
                    <div className="row work-row">
                        <div className="work-info">
                            <i className="work-icon"><BiFoodMenu /></i>
                            <h5 className="work-head">Place order</h5>
                            <p>
                                Select from our wide variety of signature dishes,
                                custom, or specialty meal options. Dishes prepared
                                with highest quality ingredient to deliver utmost
                                satisfaction 
                                
                            </p>
                        </div>
                        <div className="work-info">
                            <i className="work-icon"><FaCookieBite /></i>
                            <h5 className="work-head">Cook</h5>
                            <p>
                                Our staffs will carefully prepare, cook and package
                                all your meals and have them fresh and ready to go !
                            </p>
                        </div>
                        <div className="work-info">
                            <i className="work-icon"><FaTruck /></i>
                            <h5 className="work-head">Pickup / Delivery</h5>
                            <p>
                                You get to choose to pick up your meals
                                in our very own location or even choose a
                                delivery method at your convinience.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
        {/*------x-----Catering-------x------*/}
        <section className="cater-section sec-padding">
            <Fade left cascade>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Catering</h2>
                        </div>
                    </div>
                    <div className='cater-details'>
                        Having an event?? Why not Teemah's.
                        Have us cater your wedding, corporate or other 
                        special event!
                        Click button below to complete the enquiry form and 
                        get an immediate response
                        <div className='cater-btn'>
                            <a href="#our-menu" class="btn btn-default cater-form">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
        {/*------x-----Accessories-------x------*/}
      </>
    )
  }
}

