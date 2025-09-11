import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll'
import './index.css'
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-top-section">
                <div>
                    <h1 className="footer-name">NAVEEN</h1>
                    <h2 className="footer-skill">MERN Stack Developer</h2>
                </div>
                <div className="footer-links-container">
                    <Link className="footer-nav-links" to="home" smooth={true} duration={500}>HOME</Link>
                    <Link className="footer-nav-links" to="about" smooth={true} duration={500}>ABOUT</Link>
                    <Link className="footer-nav-links" to="projects" smooth={true} duration={500}>PROJECTS</Link>
                    <Link className="footer-nav-links" to="contact" smooth={true} duration={500}>CONTACT</Link>
                </div>
                <div>
                    <div className="main-social-container">
                        <a href="https://github.com/NaveenTechist" target="_blank" className="footer-social-icons"> <FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/naveen-yarramsetti/" className="footer-social-icons" target="_blank"><TiSocialLinkedin /></a>
                        <a href="https://x.com/Ynaveen99" className="footer-social-icons" target="_blank"><FaTwitter /></a>
                        <a href="https://www.instagram.com/dreamrider_________/" className="footer-social-icons" target="_blank"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <hr className="footer-hr" />
            <p className="rights">© 2025  Naveen Kumar Yarramsetti.  All rights reserved.</p>
        </div>
    )
}

export default Footer