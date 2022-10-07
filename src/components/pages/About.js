import Fade from "react-reveal/Fade"
import Img1 from '../images/img-20.jpg'


const About = () => {
    return(
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
    )
}
export default About