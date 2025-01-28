/* eslint-disable react/no-unescaped-entities */
import { FaBriefcase } from "react-icons/fa";
import '../styles.css'; 

const About = () => {

    const skills = [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 65 },
        { name: "Node.js", level: 60 },
        { name: "Python", level: 85 },
    ];

    const experience = [
        {
            title: "Capture the Flag Player",
            company: "Various Platforms",
            year: "July 2023 - Present",
            description: [
                "- Actively participate in Capture The Flag (CTF) challenges.",
                "- Apply ethical hacking techniques and methodologies to solve cybersecurity challenges.",
                "- Collaborate with teammates to enhance problem-solving skills."
            ],
        },
        {
            title: "Cyber Security Intern",
            company: "Durbhasi Gurukulam",
            year: "May - July 2024",
            description: [
                "- Performed black box penetration test on 2 domains.",
                "- Found sensitive information disclosure bug."
            ],
        },
        {
            title: "C# Intern",
            company: "Squirrels Infotech",
            year: "Jan - Feb 2023",
            description: [
                "- Developed a Windows Forms application for a client.",
                "- Implemented CRUD operations using C# and SQL Server."
            ],
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">About Me</h1>
            
            <hr style={{width: '50%', margin:'2% 0% 2% 25% '}} />

            {/* Personal Info */}
            <div className="container mt-4 text-center">
                <h3 >Personal Information</h3>
                
                <p><strong>Name:</strong> Raj Sabale</p>
                <p><strong>Email: </strong>
                    <a href="mailto:" className="text-decoration-none">
                            sabaleraj744@gmail.com
                    </a>
                </p>
                <p><strong>Phone:</strong> +91 7558550310</p>
                <p><strong>Address:</strong> Pune, Mahrashtra</p>
                
            </div>

            <hr style={{width: '50%', margin:'2% 0% 2% 25% '}} />

            {/* Skills */}
            <div className="skills-container">
                <h3 className="mb-3 text-center">MY SKILLS</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div
                        className="progress-circle"
                        style={{
                            background: `conic-gradient(orange ${skill.level * 3.6}deg, #222 ${skill.level * 3.6}deg)`,
                        }}
                        >
                        <span>{skill.level}%</span>
                        </div>
                        <p>{skill.name}</p>
                    </div>
                    ))}
                </div>
            </div>
           

            <hr style={{width: '50%', margin:'2% 0% 2% 25% '}} />

            {/* Experience */}
            <div className="experience-container">
                <h2 className="mb-3 text-center">EXPERIENCE</h2>
                <div className="timeline">
                    {experience.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-icon">
                            <FaBriefcase />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">{exp.year}</span>
                            <h3 className="text-start">{exp.title} <span>— {exp.company}</span></h3>
                            <ul>
                                {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
