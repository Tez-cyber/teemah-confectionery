import React, { Component } from 'react'
import imgHome from '../images/home.png'
import img1 from  '../images/specialty1.png'
import img2 from  '../images/specialty2.png'
import img3 from  '../images/specialty3.png'
import del1 from  '../images/delicacies1.png'
import del2 from  '../images/delicacies2.png'
import del3 from  '../images/delicacies3.png'
import cof1 from  '../images/coffee1.png'
import cof2 from  '../images/coffee2.png'
import cof3 from  '../images/coffee3.png'
import cof4 from  '../images/coffee4.png'
import cake1 from  '../images/cake1.png'
import cake2 from  '../images/cake2.png'
import cake3 from  '../images/cake3.png'
import cake4 from '../images/cake4.png'
import quality1 from '../images/quality1.png'
import quality2 from '../images/quality2.png'
import logo1 from '../images/logocoffee1.png'
import logo2 from '../images/logocoffee2.png'
import logo3 from '../images/logocoffee3.png'
import logo4 from '../images/logocoffee4.png'
import logo5 from '../images/logocoffee5.png'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import { FaChevronCircleDown, 
         FaArrowRight,
         FaArrowUp,
         FaCommentAlt, 
         FaEye,
         FaFacebook,
         FaInstagram,
         FaTwitter
       } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import Fade from 'react-reveal/Fade'
// import data from './data.json'
// import formatCurrency from './util'


export default class App extends Component {
    componentDidMount() {
        const products = document.querySelector('.product-filter')
        products.addEventListener("click", function(e) {
            if(e.target.classList.contains("product-item") && !e.target.classList.contains("active")) {
                const target = e.target.getAttribute("data-target");
                products.querySelector(".active").classList.remove("active")
                e.target.classList.add("active");
                const productSection = document.querySelector(".product")
                productSection.querySelector(".product-tab.active").classList.remove("active")
                productSection.querySelector(target).classList.add("active")
                // e.target.querySelector('.product-item').classList.add('change-active')
            }
       
        })
        window.addEventListener('scroll', function scrollUp(){
            const scrollUp = document.getElementById('scroll-up');
            if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
            else scrollUp.classList.remove('show-scroll')
        })
        function scrollActive(e) {
            const scrollY = window.pageYOffset
            const sections = document.querySelectorAll('section[id]')

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                      sectionTop = current.offsetTop - 58,
                      sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
                
            })
        }
        window.addEventListener('scroll', scrollActive)
    }   
    render() {
        return(
            <>
                <section className="home grid" id="home">
                    <div className="home-container">
                        <div className="home-content container">
                            <h1 className="home-title">
                                Choose your favorite coffee and enjoy
                                <span>.</span>
                            </h1>
                            <p className="home-description">
                                buy the best and delicious coffees
                            </p>
                            <div className="home-data">
                                <div className="home-data-item">
                                    <h2 className="home-data-no">120k</h2>
                                    <h3 className="home-data-title">Testimonials</h3>
                                    <p className="home-data-description">
                                        Testimonials from various customers who trusts us
                                    </p>
                                </div>
                                <div className="home-data-item">
                                    <h2 className="home-data-no">340+</h2>
                                    <h3 className="home-data-title">Exclusive Product</h3>
                                    <p className="home-data-description">
                                        Premium preparation with quality ingredients
                                    </p>
                                </div>
                            </div>
                            <a href="#specialty" className='home-scroll'>
                                <FaChevronCircleDown />
                            </a>
                        </div>
                    </div>
                    <img src={imgHome} alt="" />
                </section>

                {/* Specialty */}
                <div className="spec section container">
                    <div className="spec-contain">
                        <div className="spec-box">
                            <h2 className="section-title">
                                Specialty coffee that makes you happy
                                and cheers you up
                            </h2>
                            <div>
                               <a href="/" className="button spec-button">
                                    See more
                                </a> 
                            </div>
                            <div className="spec-category">
                                <div className="spec-group">
                                    <img src={img1} alt="" className="spec-img" />
                                    <h3 className="spec-title">Selected coffee</h3>
                                    <p className="spec-des">
                                        We select the best premium coffee, for a true taste
                                    </p>
                                </div>
                                <div className="spec-group">
                                    <img src={img2} alt="" className="spec-img" />
                                    <h3 className="spec-title">Delicious Cookies</h3>
                                    <p className="spec-des">
                                        Enjoy your coffee with some hot cookies
                                    </p>
                                </div>
                                <div className="spec-group">
                                    <img src={img3} alt="" className="spec-img" />
                                    <h3 className="spec-title">Enjoy at Home</h3>
                                    <p className="spec-des">
                                        Enjoy the best coffee in the comfort of your home
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------------Products -------------------*/}
                <div className="product section" id="products">
                    <div className="product-contain container">
                        <h2 className="section-title">
                            Choose our delicious and best product
                        </h2>
                        <div className="product-filter">
                            <button className="product-item product-line active" data-target="#delicacies">
                                <h3 className="product-title">New Delicacies</h3>
                                <span className="product-stock">3 products</span>
                            </button>
                            <button className="product-item product-line" data-target="#coffee">
                                <h3 className="product-title">Hot Coffee</h3>
                                <span className="product-stock">4 products</span>
                            </button>
                            <button className="product-item" data-target="#cake">
                                <h3 className="product-title">Cakes and Delicacies</h3>
                                <span className="product-stock">4 products</span>
                            </button>
                        </div>
                        <div className="product-content grid">
                            {/* Delicacies */}
                            <div className="product-tab active" id="delicacies">
                                <Fade left cascade>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={del1} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$5</h2>
                                            <h3 className="product-name">Cookies</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={del2} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$6</h2>
                                            <h3 className="product-name">Croissants</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={del3} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$4</h2>
                                            <h3 className="product-name">Croissant</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                </Fade>
                            </div>
                            {/* Coffee */}
                            <div className="product-tab" id="coffee">
                                <Fade left cascade>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cof1} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$7</h2>
                                            <h3 className="product-name">Black Coffee</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cof2} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$12</h2>
                                            <h3 className="product-name">Pure Coffee</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cof3} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$9</h2>
                                            <h3 className="product-name">Milk Coffee</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cof4} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$9</h2>
                                            <h3 className="product-name">Moka Coffee</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                </Fade>
                            </div>
                            {/* Cakes */}
                            <div className="product-tab" id="cake">
                                <Fade left cascade>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cake1} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$6</h2>
                                            <h3 className="product-name">Cream cake</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cake2} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$9</h2>
                                            <h3 className="product-name">Chocolate Croissant</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cake3} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$9</h2>
                                            <h3 className="product-name">Pancake</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                    <article className="product-card">
                                        <div className="product-shape">
                                            <img src={cake4} alt="" className="product-img" />
                                        </div>
                                        <div className="product-data">
                                            <h2 className="product-price">$9</h2>
                                            <h3 className="product-name">Milk cake</h3>

                                            <button className="button product-button">
                                                <BiShoppingBag />
                                            </button>
                                        </div>
                                    </article>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------------Quality -------------------*/}
                <section className="quality section" id="premium">
                    <div className="qualti-container container">
                        <h2 className="section-title">
                            We offer a premium and better quality 
                            preparation just for you
                        </h2>
                        <div className="quality-content grid">
                            <div className="quality-img">
                                <img src={quality1} alt="" className='quality-img-big'/>
                                <img src={quality2} alt="" className='quality-img-small'/>
                            </div>
                        </div>
                        <div className="quanlity-data">
                            <h1 className="quality-title">
                                Premium Coffee
                            </h1>
                            <h2 className="quality-price">
                                $92.99
                            </h2>
                            <span className="quality-special">
                                Especial price
                            </span>
                            <p className="quality-description">
                                We are delighted with our coffee. That's why you
                                get the best premium coffee plus the kettle made
                                of resistant materials that you see in the image, for 
                                a special price
                            </p>
                            <div className="quality-btns">
                                <button className="button">
                                    Buy Now
                                </button>
                                <a href="/" className="quality-btn">
                                    See more
                                    <i><FaArrowRight /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ---------------------Logos-------------------*/}
                <section className="logo section">
                    <div className="logo-contain container grid">
                        <img src={logo1} alt="" className='logo-img'/>
                        <img src={logo2} alt="" className='logo-img'/>
                        <img src={logo3} alt="" className='logo-img'/>
                        <img src={logo4} alt="" className='logo-img'/>
                        <img src={logo5} alt="" className='logo-img'/>
                    </div>
                </section>
                {/* ---------------------Logos-------------------*/}
                <section className="blog section" id='blog'>
                    <div className="blog-contain container">
                        <h2 className="section-title">
                            Our Blogs with trending topic for this week
                        </h2>
                        <div className="blog-content grid">
                            <article className="blog-card">
                                <div className="blog-image">
                                    <img src={blog1} alt="" className='blog-img'/>
                                    <a href="/" className="blog-btn">
                                        <i><FaArrowRight /></i>
                                    </a>
                                </div>
                                <div className="blog-data">
                                    <h2 className="blog-title">
                                        10 Coffee Recommendations   
                                    </h2>
                                    <p className="blog-description">
                                        The blogs about coffe will help you a lot
                                        about how it is prepared, its waiting time,
                                        for a good quality coffee.
                                    </p>
                                    <div className="blog-footer">
                                        <div className="blog-reaction">
                                            <i><FaCommentAlt /></i>
                                            <span>12</span>
                                        </div>
                                        <div className="blog-reaction">
                                            <i><FaEye /></i>
                                            <span>76.5k</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="blog-card">
                                <div className="blog-image">
                                    <img src={blog2} alt="" className='blog-img'/>
                                    <a href="/" className="blog-btn">
                                        <i><FaArrowRight /></i>
                                    </a>
                                </div>
                                <div className="blog-data">
                                    <h2 className="blog-title">
                                        12 Coffee Recommendations 
                                    </h2>
                                    <p className="blog-description">
                                        The blogs about coffe will help you a lot
                                        about how it is prepared, its waiting time,
                                        for a good quality coffee.
                                    </p>
                                    <div className="blog-footer">
                                        <div className="blog-reaction">
                                            <i><FaCommentAlt /></i>
                                            <span>45</span>
                                        </div>
                                        <div className="blog-reaction">
                                            <i><FaEye /></i>
                                            <span>356k</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                {/* ---------------------Footer-------------------*/}
                <footer className="footer">
                    <div className="footer-contain container">
                        <h1 className="footer-title">
                            Coffee.
                        </h1>
                        <div className="footer-content grid">
                            <div className="footer-data">
                                <p className="footer-description">
                                    Subscribe to out newsletter
                                </p>
                                <div className="footer-newsletter">
                                    <input 
                                        type="email" 
                                        className="footer-input"
                                        placeholder='Your Email Address'
                                     />
                                     <button className="footer-btn">
                                         <i><FaArrowRight /></i>
                                     </button>
                                </div>
                            </div>
                            <div className="footer-data">
                                <h2 className="footer-subtitle">
                                    Address
                                </h2>
                                <p className="footer-info">
                                    9876 Hacienda Av. <br />
                                    Lima, La Libertad 123, Peru
                                </p>
                            </div>
                            <div className="footer-data">
                                <h2 className="footer-subtitle">
                                    Contact
                                </h2>
                                <p className="footer-info">
                                    +234-------- <br />
                                    coffee@gmail.com
                                </p>
                            </div>
                            <div className="footer-data">
                                <h2 className="footer-subtitle">
                                    Office
                                </h2>
                                <p className="footer-info">
                                    Monday - Saturday <br />
                                    9AM - 10PM
                                </p>
                            </div>
                        </div>
                        <div className="footer-group">
                            <ul className="footer-social">
                                <a href="/" className="footer-social-link" target='_blank'>
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/" className="footer-social-link" target='_blank'>
                                    <FaInstagram />
                                </a>
                                <a href="/" className="footer-social-link" target='_blank'>
                                    <FaTwitter />
                                </a>
                            </ul>
                            <span className="footer-copy">
                                &#169; Tez-Cyber. All rights reserved
                            </span>
                        </div>
                    </div>
                </footer>
                {/* ---------------------Footer-------------------*/}
                <a href="" className="scrollup" id='scroll-up'>
                    <i><FaArrowUp /></i>
                </a>
            </>
        )
    }
}