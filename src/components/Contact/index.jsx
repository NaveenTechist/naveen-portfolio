import { CgMail } from "react-icons/cg";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { useState } from "react";
import './index.css'
const Contact = () => {
    const [name, setName] = useState('')
    const [gmail, setGmail] = useState('')
    const [message, setMessage] = useState('')
    const [erorMsgShow, setErorMsgShow] = useState(false)
    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const { ref: formRef, inView: formInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeMail = (event) => {
        setGmail(event.target.value)
    }

    const onChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        if (!name || !gmail || !message) {
            erorMsgShow(true)
            return
        }
        const userMessage = { name, gmail, message }
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(userMessage),
        }
        setName('')
        setGmail('')
        setMessage('')
        const url = 'https://formspree.io/f/mandawrl'
        const response = await fetch(url, options)
        console.log(response)
        if (response.ok) {
            console.log('Success')
        } else {
            console.log("Failure")
        }

    }

    return (
        <div className='main-contact-container'>
            <Element name="contact">
                <h1 className='about'>Get In Touch</h1>
                <hr className='bottom-hr-line' />
            </Element>
            <div className='contact-container'>
                {/* <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757165147/keyboard_mdbi2z.jpg?_s=public-apps" className='keyboard-img floating2' alt="drone" /> */}
                <div className='first-part' ref={contactRef}>
                    <h1 className={`contact-text fade-in-left ${contactInView ? 'visible' : ''}`}>Contact Me</h1>
                    <p className={`text-description fade-in-left ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Have a question or want to work together? Feel free to reach out to me using the contact form or through my social media profiles.</p>
                    <div className={`details-container fade-in-left ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="flex">
                            <div className="icon-container">
                                <CgMail className="icons" />
                            </div>
                            <p className="contact-names">naveenyarramsetty8574@gmail.com</p>
                        </div>
                        <div className="flex">
                            <div className="icon-container">
                                <MdLocalPhone />
                            </div>
                            <p className="contact-names">+91 9121653244</p>
                        </div>
                        <div className="flex">
                            <div className="icon-container">
                                <FaLocationDot />
                            </div>
                            <p className="contact-names">Vijayawada, Andhra Pradesh, India</p>
                        </div>
                    </div>
                    <div className={`main-social-container fade-in-left ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                        <button className={`social-icons fade-in-scale ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}> <a href="https://github.com/NaveenTechist" target="_blank" > <FaGithub /> </a></button>
                        <button className={`social-icons fade-in-scale ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}> <a href="https://www.linkedin.com/in/naveen-yarramsetti/" target="_blank"><TiSocialLinkedin /></a></button>
                        <button className={`social-icons fade-in-scale ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '0.9s' }}> <a href="https://x.com/Ynaveen99" target="_blank"><FaTwitter /></a></button>
                        <button className={`social-icons fade-in-scale ${contactInView ? 'visible' : ''}`} style={{ transitionDelay: '1.0s' }}> <a href="https://www.instagram.com/dreamrider_________/" target="_blank"><FaInstagram /></a> </button>
                    </div>
                </div>
                <form className="second-part" ref={formRef} onSubmit={onSubmitForm} >
                    <label className={`fade-in-right ${formInView ? 'visible' : ''}`}>Name <span>*</span> </label>
                    <input type="text" onChange={onChangeName} className={`contact-input fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }} />
                    <label className={`fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Email</label>
                    <input type="text" onChange={onChangeMail} className={`contact-input fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }} />
                    <label htmlFor="" className={`fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>Message</label>
                    <textarea rows={6} onChange={onChangeMessage} className={`contact-input fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}></textarea>
                    <div className={`fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                        <input type="checkbox" id="policy" />
                        <label htmlFor="policy" className="policy-text">I agree to the privacy policy</label>
                    </div>
                    <button type="submit" className={`send-msg-btn fade-in-right ${formInView ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}> <RiSendPlaneLine className="send-icon" /> Send Message</button>
                    {erorMsgShow && <div className="error-msg-container">
                        <p className="error-msg"  >enter all fields</p>
                    </div>}
                </form>

            </div>
        </div>
    )
}

export default Contact