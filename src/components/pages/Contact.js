import { useState } from 'react'
import { GiVibratingSmartphone, GiPaperPlane } from 'react-icons/gi'
import { BiMailSend } from 'react-icons/bi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Validate from './Validate'

export default function Contact() {
  const initialValues = { 
    name: "",
    email: "",
    contact: "",
    message: "",
  }
  const[errors, setErrors] = useState({})
  const [values, setValues] = useState(initialValues)
  const handleInput = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value 
      })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(function() {
      setErrors(Validate(values))
    },2000)
  }
    return (
      <div className='contact-section sec-padding'>   
        <div className="container">
          <div className="row contact-form">
            <div className='contact-info'>
              <h3>Contact us</h3>
              <span></span>
              <p>
                Complete the form to send us a
                message and we'll get back to you
                as soon as possible
              </p>
              <span></span>
              <div className='smart-info'>
                <i><GiVibratingSmartphone /></i>
                <a href="tel:+2349090288329">+2349090288329</a>
              </div>
              <div className='smart-info'>
                <i><GiPaperPlane /></i>
                <a href="mailto:bisolatiamiyu3@gmail.com">bisolatiamiyu3@gmail.com</a>
              </div>
              <span></span>
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
                    href="https://wa.me/+2349090288329"><FaWhatsapp />
                </a>
                <a href="mailto:bisolatiamiyu3@gmail.com">
                  <BiMailSend />
                </a>
              </div>
            </div>
            <div className='contact-info'>
              <h3>Send us a message</h3>
              <form action="">
                <div className="form-control">
                  <input 
                    name='name'
                    type="text"
                    required
                    value={values.name}
                    onChange={handleInput}
                    />
                    {errors.name && <span className='error'>{errors.name}</span>}
                  <label className='label-name'>
                    <span className="content-name">
                      Full Name
                    </span>
                  </label>
                </div>
                <div className="form-control">
                  <input 
                    name='email'
                    type="text"
                    required
                    value={values.email}
                    onChange={handleInput}
                    />
                    {errors.email && <span className='error'>{errors.email}</span>}
                  <label className="label-name">
                    <span className="content-name">
                      Email Address
                    </span>
                  </label>
                </div>
                <div className="form-control">
                  <input 
                    name='contact'
                    type="text"
                    required
                    value={values.contact}
                    onChange={handleInput}
                    />
                    {errors.contact && <span className='error'>{errors.contact}</span>}
                  <label className="label-name">
                    <span className="content-name">
                      Contact
                    </span>
                  </label>
                </div>
                <div className="form-control">
                  <input 
                    name='message'
                    type="text"
                    required
                    value={values.message}
                    onChange={handleInput}
                    />
                    {errors.message && <span className='error'>{errors.message}</span>}
                  <label className="label-name">
                    <span className="content-name">
                      Message
                    </span>
                  </label>
                </div>
                <button className='btn btn-submit' onClick={handleFormSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
