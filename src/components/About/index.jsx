// import Marquee from "react-fast-marquee";
import SkillsShowCase from "../SkillsShowCase/index.jsx"
import './index.css'
import { Link, Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const About = () => {
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const { ref: statsRef, inView: statsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    // State for counting animation
    const [codingDays, setCodingDays] = useState(0);
    const [problemsSolved, setProblemsSolved] = useState(0);
    const [learningHours, setLearningHours] = useState(0);

    // Counting animation effect
    useEffect(() => {
        if (statsInView) {
            const duration = 2000; // 2 seconds
            const steps = 60; // 60 steps for smooth animation
            const stepDuration = duration / steps;

            // Animate coding days (640)
            let currentDays = 0;
            const daysIncrement = 727 / steps;
            const daysInterval = setInterval(() => {
                currentDays += daysIncrement;
                if (currentDays >= 640) {
                    setCodingDays(727);
                    clearInterval(daysInterval);
                } else {
                    setCodingDays(Math.floor(currentDays));
                }
            }, stepDuration);

            // Animate problems solved (5314)
            let currentProblems = 0;
            const problemsIncrement = 5314 / steps;
            const problemsInterval = setInterval(() => {
                currentProblems += problemsIncrement;
                if (currentProblems >= 5314) {
                    setProblemsSolved(5314);
                    clearInterval(problemsInterval);
                } else {
                    setProblemsSolved(Math.floor(currentProblems));
                }
            }, stepDuration);

            // Animate learning hours (807)
            let currentHours = 0;
            const hoursIncrement = 807 / steps;
            const hoursInterval = setInterval(() => {
                currentHours += hoursIncrement;
                if (currentHours >= 807) {
                    setLearningHours(807);
                    clearInterval(hoursInterval);
                } else {
                    setLearningHours(Math.floor(currentHours));
                }
            }, stepDuration);

            // Cleanup intervals
            return () => {
                clearInterval(daysInterval);
                clearInterval(problemsInterval);
                clearInterval(hoursInterval);
            };
        }
    }, [statsInView]);

    return (
        <div className="about-container">
            <Element name="about" data-section="about">
                <h1 className='about'>ABOUT ME</h1>
                <hr className='bottom-hr-line' />
            </Element>
            <div className='know-container bg'>
                <div className="skill-img-container">
                    <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1764684211/Gemini_Generated_Image_a1wl31a1wl31a1wl_meospj.jpg?_s=public-apps" className='profile-img-for-skills' alt="profile" />
                </div>
                <div className='left-container' ref={aboutRef}>
                    <h2 className={`text-4xl font-bold get-to-know-me fade-in-left ${aboutInView ? 'visible' : ''}`}>GET TO KNOW ME!</h2>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        I am a <span className="underline">MERN Stack Developer,</span> Graphic Designer, and AI/ML Enthusiast.
                        <span className="underline">Development, Creativity, and Innovation</span> are my core strengths—and my passion.</p>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>With a strong drive to grow and learn every day, Hands-on with <span className="underline"> AI LLMs, Agents, ML & DS </span>. I’ve also been maintaining a <span className="underline"> 727+ days</span> <img className="gif" src="https://media.tenor.com/KXakpzVoGJgAAAAm/feuer-fire.webp" /> coding challenge streak, which has shaped me with <span className="underline"> industry-ready skills </span> and real-world project experience.</p>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>I’m a <span className="underline"> Final Year B.Tech student in Information Technology </span> from Vijayawada, Andhra Pradesh. I’ve built responsive MERN applications and sharpened my frontend design skills to create smooth, user-friendly experiences. <span className="underline"> I’m open to opportunities </span> to learn, grow, and contribute.</p>
                    <Link to="contact"><button className={`contact fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>Contact</button></Link>
                </div>
            </div>
            <div className="my-skills" ref={skillsRef}>
                <h2 className={`text-4xl font-bold skills-head-name skills-left fade-in-right ${skillsInView ? 'visible' : ''}`}>TECHNICAL SKILLS</h2>
                <div className="skills-icons-container">
                    <SkillsShowCase />
                </div>
            </div>
            <div className="consistency-showcase" ref={statsRef}>
                <div className={`each-con fade-in-up ${statsInView ? 'visible' : ''}`} style={{ transitionDelay: '1.0s' }}>
                    <h1 className="con-number">{codingDays.toLocaleString()} +</h1>
                    <p className="con-para">Days Coding Streaks</p>
                </div>
                <div className={`each-con fade-in-up ${statsInView ? 'visible' : ''}`} style={{ transitionDelay: '1.2s' }}>
                    <h1 className="con-number">{problemsSolved.toLocaleString()} +</h1>
                    <p className="con-para">Problems Solved</p>
                </div>
                <div className={`each-con fade-in-up ${statsInView ? 'visible' : ''}`} style={{ transitionDelay: '1.4s' }}>
                    <h1 className="con-number">{learningHours.toLocaleString()} +</h1>
                    <p className="con-para">Hours of Continuous Learning</p>
                </div>
            </div>
        </div>
    )
}
export default About


