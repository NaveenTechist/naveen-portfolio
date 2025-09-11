import Marquee from "react-fast-marquee";
import {
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaGitAlt,
    FaNodeJs,
    FaReact
} from "react-icons/fa";

import {
    SiBootstrap,
    SiMysql,
    SiJavascript,
    SiAdobephotoshop,
    SiAdobepremierepro
} from "react-icons/si";
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
            const daysIncrement = 640 / steps;
            const daysInterval = setInterval(() => {
                currentDays += daysIncrement;
                if (currentDays >= 640) {
                    setCodingDays(640);
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
                <div className='left-container' ref={aboutRef}>
                    <h2 className={`text-4xl font-bold get-to-know-me fade-in-left ${aboutInView ? 'visible' : ''}`}>GET TO KNOW ME!</h2>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        I am a <span className="underline">MERN Stack Developer,</span> Graphic Designer, and AI/ML Enthusiast.
                        <span className="underline">Development, Creativity, and Innovation</span> are my core strengths—and my passion.</p>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>With a strong drive to grow and learn every day, Hands-on with <span className="underline"> AI LLMs, Agents, ML & DS </span>. I’ve also been maintaining a <span className="underline"> 640+ days</span> <img className="gif" src="https://media.tenor.com/KXakpzVoGJgAAAAm/feuer-fire.webp" /> coding challenge streak, which has shaped me with <span className="underline"> industry-ready skills </span> and real-world project experience.</p>
                    <p className={`get-more-para fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>I’m a <span className="underline"> Final Year B.Tech student in Information Technology </span> from Vijayawada, Andhra Pradesh. I’ve built responsive MERN applications and sharpened my frontend design skills to create smooth, user-friendly experiences. <span className="underline"> I’m open to opportunities </span> to learn, grow, and contribute.</p>
                    <Link to="contact"><button className={`contact fade-in-left ${aboutInView ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>Contact</button></Link>
                </div>
                <div className="my-skills" ref={skillsRef}>
                    <h2 className={`text-4xl font-bold get-to-know-me skills-left fade-in-right ${skillsInView ? 'visible' : ''}`}>MY SKILLS</h2>
                    <div className={`skillsarrange fade-in-up ${skillsInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <Marquee pauseOnHover gradient={false} speed={40} className='marquee-container'>
                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaHtml5 className="text-6xl text-[#E34F26]" />
                                <p className="skill-name">HTML</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaCss3Alt className="text-6xl text-[#1572B6]" />
                                <p className="skill-name">CSS</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiBootstrap className="text-6xl text-[#7952B3]" />
                                <p className="skill-name">Bootstrap</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiMysql className="text-6xl text-[#4479A1]" />
                                <p className="skill-name">SQL</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaPython className="text-6xl text-[#3776AB]" />
                                <p className="skill-name">Python</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiJavascript className="text-6xl text-[#F7DF1E]" />
                                <p className="skill-name">JavaScript</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaGitAlt className="text-6xl text-[#F05032]" />
                                <p className="skill-name">Git</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaNodeJs className="text-6xl text-[#68A063]" />
                                <p className="skill-name">Node.js</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaReact className="text-6xl text-[#61DAFB]" />
                                <p className="skill-name">React.js</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl each-marquee px-4 py-2 rounded-lg">
                                <SiAdobephotoshop className="text-6xl text-[#001E36] bg-[#31A8FF] rounded-lg " />
                                <p className="skill-name">Photoshop</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl each-marquee px-4 py-2 rounded-lg">
                                <SiAdobepremierepro className="text-6xl bg-[#9998FF] text-[#00005B] rounded-lg " />
                                <p className="skill-name">Premiere Pro</p>
                            </div>
                        </Marquee>

                        <Marquee pauseOnHover gradient={false} speed={40} direction="right" className="mt-6">
                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaHtml5 className="text-6xl text-[#E34F26]" />
                                <p className="skill-name">HTML</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaCss3Alt className="text-6xl text-[#1572B6]" />
                                <p className="skill-name">CSS</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiBootstrap className="text-6xl text-[#7952B3]" />
                                <p className="skill-name">Bootstrap</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiMysql className="text-6xl text-[#4479A1]" />
                                <p className="skill-name">SQL</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaPython className="text-6xl text-[#3776AB]" />
                                <p className="skill-name">Python</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <SiJavascript className="text-6xl text-[#F7DF1E]" />
                                <p className="skill-name">JavaScript</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaGitAlt className="text-6xl text-[#F05032]" />
                                <p className="skill-name">Git</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaNodeJs className="text-6xl text-[#68A063]" />
                                <p className="skill-name">Node.js</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl text-zinc-700 each-marquee">
                                <FaReact className="text-6xl text-[#61DAFB]" />
                                <p className="skill-name">React.js</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl each-marquee px-4 py-2 rounded-lg">
                                <SiAdobephotoshop className="text-6xl text-[#001E36] bg-[#31A8FF] rounded-lg " />
                                <p className="skill-name">Photoshop</p>
                            </div>

                            <div className="flex items-center gap-2 mx-6 text-xl each-marquee px-4 py-2 rounded-lg">
                                <SiAdobepremierepro className="text-6xl bg-[#9998FF] text-[#00005B] rounded-lg " />
                                <p className="skill-name">Premiere Pro</p>
                            </div>
                        </Marquee>
                    </div>
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