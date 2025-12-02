import Header from '../Header/index.jsx'
import About from '../About/index.jsx'
import Projects from '../Projects/index.jsx'
import Contact from '../Contact/index.jsx'
import Footer from '../Footer/index.jsx'
import { Link, Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import ChatBot from "react-chatbotify";
import './index.css'

// Chatbot configuration
const chatbotConfig = {
    primaryColor: "#305eff",
    secondaryColor: "#ffffff",
    fontFamily: "Roboto, sans-serif",
    headerTitle: "Hi! I'm Naveen's Assistant",
    headerSubtitle: "Ask me anything about Naveen!",
    placeholderText: "Type your message here...",
    chatHistory: {
        storageKey: "naveen_portfolio_chat"
    },
    notification: {
        disabled: true
    },
    chatWindow: {
        showMessageDate: false,
        showMessageTime: false,
        showUserAvatar: true,
        showBotAvatar: true,
        showTypingIndicator: true,
        showChatHistory: true,
        showChatInput: true,
        showScrollbar: true,
        showPoweredBy: false
    }
};

// Chatbot flow
const chatbotFlow = {
    start: {
        message: "Hello! I'm here to help you learn more about Naveen. What would you like to know?",
        path: "ask_question"
    },
    ask_question: {
        message: "You can ask me about:\n• Naveen's skills and experience\n• His projects and work\n• How to contact him\n• His background and education\n\nWhat interests you most?",
        path: "handle_question"
    },
    handle_question: {
        message: (params) => {
            const userInput = params.userInput.toLowerCase();
            if (userInput.includes("skill") || userInput.includes("experience") || userInput.includes("mern") || userInput.includes("developer")) {
                return "Naveen is a MERN Stack Developer with expertise in:\n\n🔹 Frontend: React.js, HTML5, CSS3, JavaScript, Bootstrap\n🔹 Backend: Node.js, Express.js\n🔹 Database: MySQL, MongoDB\n🔹 Tools: Git, Python, AI/ML\n🔹 Design: Adobe Photoshop, Premiere Pro\n\nHe's also an AI/ML enthusiast with 640+ days coding streak!";
            } else if (userInput.includes("project") || userInput.includes("work") || userInput.includes("portfolio")) {
                return "Naveen has built several impressive projects:\n\n🔹 Full-stack MERN applications\n🔹 Responsive web designs\n🔹 AI/ML implementations\n🔹 Graphic design work\n\nCheck out the Projects section below to see his work in detail!";
            } else if (userInput.includes("contact") || userInput.includes("reach") || userInput.includes("email") || userInput.includes("phone")) {
                return "You can reach Naveen through:\n\n📧 Email: Check the Contact section\n📱 Social Media: LinkedIn, GitHub\n💼 Professional: Available for opportunities\n\nHe's open to collaborations and new opportunities!";
            } else if (userInput.includes("background") || userInput.includes("education") || userInput.includes("student") || userInput.includes("btech")) {
                return "Naveen's Background:\n\n🎓 Final Year B.Tech student in Information Technology\n📍 From Vijayawada, Andhra Pradesh\n💻 640+ days coding challenge streak\n🚀 Passionate about Development, Creativity & Innovation\n\nHe's actively learning and growing in the tech field!";
            } else {
                return "That's interesting! Naveen is a versatile developer with skills in MERN stack, AI/ML, and graphic design. Feel free to ask about his specific skills, projects, or how to contact him!";
            }
        },
        path: "continue_chat"
    },
    continue_chat: {
        message: "Is there anything else you'd like to know about Naveen?",
        path: "handle_continue"
    },
    handle_continue: {
        message: (params) => {
            const userInput = params.userInput.toLowerCase();
            if (userInput.includes("ask") || userInput.includes("question") || userInput.includes("more")) {
                return "Great! What would you like to know?";
            } else if (userInput.includes("portfolio") || userInput.includes("view") || userInput.includes("see")) {
                return "Perfect! Scroll down to explore Naveen's portfolio sections:\n\n• About Me - Learn more about his journey\n• Projects - See his amazing work\n• Contact - Get in touch with him\n\nEnjoy exploring! 🚀";
            } else if (userInput.includes("contact") || userInput.includes("reach") || userInput.includes("connect")) {
                return "Excellent choice! Naveen is always excited to connect with new people. Scroll down to the Contact section to find his details and send him a message!";
            } else {
                return "Thanks for chatting! Feel free to explore Naveen's portfolio below. Have a great day! 😊";
            }
        },
        path: "end_chat"
    },
    end_chat: {
        message: "Thanks for visiting Naveen's portfolio! Feel free to explore the sections below or start a new conversation anytime. Have a wonderful day! 🌟",
        path: "start"
    }
};



const Home = () => {
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    return (
        <Element name="home">
            <div className="min-h-screen w-full bg-[#f8fafc] relative">
                {/* Bottom Fade Grid Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
                        backgroundSize: "20px 30px",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    }}
                />
                <div className=''>
                    <Header />
                    <div className='interface'>
                        <div className='interface-body' ref={heroRef}>
                            <div className='interface-body-left'>
                                {/* <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757159796/pngegg_2_rlgab2.jpg?_s=public-apps" className='drone-img floating' alt="drone" />
                                <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757162832/laptop2_rjepfc.jpg?_s=public-apps" className='laptop-img floating2' alt="drone" />
                                <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757165147/pendrive_qlym4a.jpg?_s=public-apps" className='pendrive-img floating3' alt="drone" />
                                <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757219692/paper_boat_jtl4wq.jpg?_s=public-apps" className='paper-img floating4' alt="drone" /> */}
                                <h1 className={`hello name-for-desktop fade-in ${heroInView ? 'visible' : ''}`}>Hello!</h1>
                                <h1 className={`name name-for-desktop fade-in ${heroInView ? 'visible' : ''}`}>I’m <span className='name-span'>Naveen,</span></h1>
                                <h1 className='sub-name'>MERN-Stack Developer &</h1>
                                <h1 className='sub-name'>Problem Solver</h1>
                                <p className='intro-para'>I build scalable web applications with React, Node.js, and AI-driven logic to redefine how technology connects with people.</p>
                                {/* <div className='mobile-name'>
                                    <h1 className={`name name-margin-remove fade-in ${heroInView ? 'visible' : ''}`}>I'M</h1>
                                    <h1 className={`name fade-in ${heroInView ? 'visible' : ''}`}>NAVEEN</h1>
                                </div> */}
                                {/* <div className="cycling-text-container">
                                    <p className={`mern-stack cycling-text ${heroInView ? 'visible' : ''}`} data-text="MERN Stack Developer">MERN Stack Developer</p>
                                    <p className={`mern-stack cycling-text ${heroInView ? 'visible' : ''}`} data-text="Graphic Designer">Graphic Designer</p>
                                    <p className={`mern-stack cycling-text ${heroInView ? 'visible' : ''}`} data-text="AI/ML Enthusiasm">AI/ML Enthusiast & Practitioner</p>
                                </div> */}
                                <div className={`fade-in ${heroInView ? 'visible' : ''}`} style={{ transitionDelay: '1.4s' }}>
                                    <a target='_blank' href='https://drive.google.com/file/d/1StnFxv5oquFiPO-wekvXG-vO-IcvVgfM/view?usp=sharing'><button type='button' className='resume'>RESUME</button></a>
                                    <Link to="projects" smooth={true} duration={500}><button type='button' className='projects'>Projects</button></Link>
                                </div>
                            </div>
                            <div className="profile-container">
                                <img src="https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1764685881/PortfolioImgFeather_cvuzh0.jpg?_s=public-apps" className='profile-img' alt="profile" />
                            </div>
                        </div>
                        <div className='scroll-downs-container'>
                            <Link to="about" smooth={true} duration={800}>
                                <div className="scroll-downs">
                                    <div className="mousey">
                                        <div className="scroller"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='chatbot-container'>
                            <ChatBot
                                config={chatbotConfig}
                                flow={chatbotFlow}
                            />
                        </div>
                        <div>
                            <About />
                            <Projects />
                            <Contact />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default Home



