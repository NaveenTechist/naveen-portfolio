import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import './index.css'

const projectsData = [
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/v1757075001/Screenshot_644_dyzmks.png',
        name: 'Ecommerce App',
        description: "E-commerce app is a dynamic e-commerce web app built with React Router. It fetches product data from the server and displays categories like clothing, accessories, and gadgets. Powerful filtering options help users explore items easily, making the shopping experience fast, responsive, and highly engaging in real-time.",
        gitHub: 'https://github.com/NaveenTechist/EcommerceFinalApp',
        webUrl: 'https://naveentechist45.ccbp.tech/login',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757075000/Screenshot_645_g1clkd.jpg?_s=public-apps',
        name: 'Jobby App',
        description: "Jobby App is a smart job search portal that fetches job opportunities from the server in real-time. It displays dynamic listings with powerful filtering options. Each job post includes subtle skill cues, helping users tailor resumes, sharpen grammar, and improve their pitch in a professional, engaging way.",
        gitHub: 'https://github.com/NaveenTechist/JobbyApp',
        webUrl: 'https://naveentechist42.ccbp.tech',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757075846/Screenshot_646_kv3lkg.jpg?_s=public-apps',
        name: 'NXT Watch',
        description: "Nxt Watch is a smart video streaming platform that mirrors YouTube. It streams content in real-time, displaying dynamic video feeds with powerful filtering options. Each video includes subtle content cues, helping users refine playlists, sharpen presentation, and improve their engagement in a professional, entertaining way.",
        gitHub: 'https://github.com/NaveenTechist/EcommerceFinalApp',
        webUrl: 'https://naveentechist45.ccbp.tech/login',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757222305/Screenshot_651_hzm1ws.jpg?_s=public-appshttps://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757222663/Screenshot_651_hzm1ws.jpg?_s=public-apps',
        name: 'Car Store',
        description: "CarStore is a smart car shopping platform that mirrors modern e-commerce. It showcases cars in real-time, displaying dynamic listings with powerful filtering options. Each car includes detailed information, helping users explore models, compare features, and make better decisions in a professional, seamless way. Users can log in, view the number of cars, add cars to the cart, fetch live data from the database, explore each car in detail, and log out securely.",
        gitHub: 'https://github.com/NaveenTechist/CarsStore',
        webUrl: 'https://carstor.netlify.app',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757514253/Screenshot_668_dnpcsr.jpg?_s=public-apps',
        name: 'Money Manager',
        description: "Money Manager is a responsive web app designed to track income and expenses. It fetches and updates balance in real-time, allowing users to add transactions with title, amount, and type. A clean interface with history and delete options makes managing finances simple, accurate, and highly engaging.",
        gitHub: 'https://github.com/NaveenTechist/MoneyManager',
        webUrl: 'https://naveentechist23.ccbp.tech',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757514507/Screenshot_669_brvsqi.jpg?_s=public-apps',
        name: 'Appointment App',
        description: "Appointment App is a dynamic web app for scheduling and managing meetings. Users can add appointments with title and date, which are stored and displayed in real-time. A clean interface with options to view, edit, and delete entries makes managing schedules simple, responsive, and highly efficient.",
        gitHub: 'https://github.com/NaveenTechist/AppointmentsApp',
        webUrl: 'https://naveentechist22.ccbp.tech',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757512153/Screenshot_663_rdua4i.jpg?_s=public-apps',
        name: 'Rock Paper Scissors',
        description: 'Rock Paper Scissors is an interactive web game built with React. It dynamically handles user choices, generates computer moves, and instantly decides the winner with smooth UI feedback. The game is responsive, fast, and engaging, providing a fun real-time experience across devices.',
        gitHub: 'https://github.com/NaveenTechist/RockPaperScissors',
        webUrl: 'https://naveentechist54.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757515250/Screenshot_671_mf1sqw.jpg?_s=public-apps',
        name: 'App Store',
        description: "App Store is a dynamic web app showcasing a wide range of applications across categories like games, news, social, and food. It fetches data from the backend and displays apps in a clean, responsive UI. With powerful search and filtering, users can explore apps quickly, making browsing simple and engaging.",
        gitHub: 'https://github.com/NaveenTechist',
        webUrl: 'https://naveentechist19.ccbp.tech',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757513711/Screenshot_666_gmeto4.jpg?_s=public-apps',
        name: 'Password Manager',
        description: "Password Manager is a secure web app built for managing credentials safely. It fetches and stores encrypted data in the database, displaying accounts and categories in a clean UI. Powerful search and autofill options help users manage logins easily, making security fast, reliable, and highly user-friendly.",
        gitHub: 'https://github.com/NaveenTechist/PasswordManager',
        webUrl: 'https://naveentechist27.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757513928/Screenshot_667_anhs6w.jpg?_s=public-apps',
        name: 'Digital Timer App',
        description: "Digital Timer is an interactive web app built with precision and simplicity. It fetches input values, manages countdowns, and displays time updates in real-time. With start, pause, and reset controls, it ensures accuracy and responsiveness, making the timing experience smooth, reliable, and highly engaging.",
        gitHub: 'https://github.com/NaveenTechist/DigitalTimerApp',
        webUrl: 'https://naveentechist26.ccbp.tech/',
    },


    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757514767/Screenshot_670_moaxip.jpg?_s=public-apps',
        name: 'Comments App',
        description: "Comments App is an interactive web app for posting and managing user comments. Users can add a title with their comment, which is displayed in real-time with options to like or delete. A clean UI with instant updates ensures a responsive, engaging, and user-friendly commenting experience.",
        gitHub: 'https://github.com/NaveenTechist/CommentsApp',
        webUrl: 'https://naveentechist21.ccbp.tech',
    },

    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757515618/Screenshot_672_k0lgbw.jpg?_s=public-apps',
        name: 'History App',
        description: "History App is an interactive web app that records and displays past activities in real-time. Users can add entries with titles and details, which are stored and shown in a clean, responsive interface. With options to view and delete records, it makes tracking history simple, accurate, and engaging.",
        gitHub: 'https://github.com/NaveenTechist',
        webUrl: 'https://naveentechist15.ccbp.tech',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757222919/Screenshot_653_xfvzio.jpg?_s=public-apps',
        name: 'Match Game',
        description: "Match Game is a fast-paced image matching platform that mirrors real-time gameplay. It challenges users with a 60-second countdown, presenting dynamic image sets with precise target cues. Each correct choice earns points instantly, helping players sharpen focus, improve reaction speed, and build strategic thinking, all while enjoying a fun, pressure-packed experience. The game tracks progress over multiple rounds, motivating continuous improvement. Advanced difficulty level.",
        gitHub: 'https://github.com/NaveenTechist/EmojiGame',
        webUrl: 'https://naveentechist28.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757223377/Screenshot_654_jrheff.jpg?_s=public-apps',
        name: 'Genrate CSS Colors',
        description: "Match Game is a fast-paced image matching platform that mirrors real-time gameplay. It challenges users with a 60-second countdown, presenting dynamic image sets with precise target cues. Each correct choice earns points instantly, helping players sharpen focus, improve reaction speed, and build strategic thinking, all while enjoying a fun, pressure-packed experience. The game tracks progress over multiple rounds, motivating continuous improvement. Advanced difficulty level.",
        gitHub: 'https://github.com/NaveenTechist',
        webUrl: 'https://naveentechist48.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757466312/Screenshot_661_smyql5.jpg?_s=public-apps',
        name: 'Project Showcase',
        description: "A responsive, fully dynamic e-commerce web app built with React Router. All category data including clothing, accessories, and gadgets is fetched directly from the backend, ensuring real-time updates. Advanced filtering, static views, and smooth navigation make the shopping experience fast, intuitive, responsive, and engaging in real-time.",
        gitHub: 'https://github.com/NaveenTechist/ProjectsShowcase',
        webUrl: 'https://naveentechist64.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757511752/Screenshot_662_bhenwd.jpg?_s=public-apps',
        name: 'My Task App',
        description: "My Task App is a dynamic task management web app built with React Router. It fetches task data from the backend and organizes them into domains like health, sports, and education. Powerful filtering and categorization options help users manage tasks efficiently, making the experience fast, responsive, and highly engaging in real-time.",
        gitHub: 'https://github.com/NaveenTechist/MyTasks',
        webUrl: 'https://naveentechist60.ccbp.tech/',
    },

    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757512742/Screenshot_664_upj34d.jpg?_s=public-apps',
        name: 'Popular Repos',
        description: "Popular Repos is a dynamic showcase of repositories built with precision and clarity. It highlights projects across categories like web apps, tools, and utilities. Powerful search and filtering options help users explore repos easily, making discovery fast, responsive, and highly engaging in real-time.",
        gitHub: 'https://github.com/NaveenTechist/GithubPopularRepos',
        webUrl: 'https://naveentechist39.ccbp.tech/',
    },
    {
        imgUrl: 'https://res.cloudinary.com/dgjwz2ydp/image/upload/fl_preserve_transparency/v1757513275/Screenshot_665_a7rbmp.jpg?_s=public-apps',
        name: 'IPL Dashboard',
        description: "IPL Dashboard is a dynamic web app built with React Router. It fetches team and match data directly from the database and displays stats like scores, players, and standings. Powerful filters let users compare teams easily, making the experience fast, responsive, and highly engaging in real-time.",
        gitHub: 'https://github.com/NaveenTechist/IPLDashboardApp',
        webUrl: 'https://naveentechist34.ccbp.tech/',
    },
]

const Projects = () => {
    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <>
            <Element name="projects">
                <h1 className='about'>PROJECTS</h1>
                <hr className='bottom-hr-line' />
            </Element>
            <div className="main-project-container" ref={projectsRef}>
                <div className="all-project-cards">
                    {
                        projectsData.map((each, index) => (
                            <div
                                key={index}
                                className="project-each-card"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <img src={each.imgUrl} alt={each.name} className="project-img" />
                                <h2 className="project-name">{each.name}</h2>
                                <p className="project-description">{each.description}</p>
                                <div className="project-btns">
                                    <a href={each.gitHub} target="_blank" rel="noopener noreferrer" className="github-btn" ><FaGithub className="git-icon" /> GitHub </a>
                                    <a href={each.webUrl} className="explore-btn" target="_blank" rel="noopener noreferrer" >Live Demo<LuSquareArrowOutUpRight className="live-icon" /></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Projects