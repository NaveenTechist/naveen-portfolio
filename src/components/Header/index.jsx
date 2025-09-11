import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Popup from 'reactjs-popup'
import { useState } from 'react'
import './index.css'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='nav-bar'>
            <div className='nav-body'>
                <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757168807/N_qtcv7d.jpg?_s=public-apps" alt="logo" className="logo" />
                <div className='nav-links-container'>
                    <Link className="nav-links" to="home" smooth={true} duration={500}>HOME</Link>
                    <Link className="nav-links" to="about" smooth={true} duration={500}>ABOUT</Link>
                    <Link className="nav-links" to="projects" smooth={true} duration={500}>PROJECTS</Link>
                    <Link className="nav-links" to="contact" smooth={true} duration={500}>CONTACT</Link>
                </div>
                <div className='burger'>
                    <Popup
                        trigger={
                            <button type='button' onClick={toggleMenu}>
                                <div className={`burger-container ${isMenuOpen ? 'open' : ''}`}>
                                    <GiHamburgerMenu className={`burger-icon ${isMenuOpen ? 'hidden' : ''}`} />
                                    <RxCross2 className={`cross-icon ${isMenuOpen ? 'visible' : ''}`} />
                                </div>
                            </button>
                        }
                        onOpen={() => setIsMenuOpen(true)}
                        onClose={() => setIsMenuOpen(false)}
                    >
                        {(close) => (
                            <div className='main-pop'>
                                <div className='popup-container'>
                                    <Link className="nav-links" to="home" smooth={true} duration={500} onClick={() => { close(); setIsMenuOpen(false); }}>HOME</Link>
                                    <Link className="nav-links" to="about" smooth={true} duration={500} onClick={() => { close(); setIsMenuOpen(false); }}>ABOUT</Link>
                                    <Link className="nav-links" to="projects" smooth={true} duration={500} onClick={() => { close(); setIsMenuOpen(false); }}>PROJECTS</Link>
                                    <Link className="nav-links" to="contact" smooth={true} duration={500} onClick={() => { close(); setIsMenuOpen(false); }}>CONTACT</Link>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </nav>
    )
}
export default Header