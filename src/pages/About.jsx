/* eslint-disable react/no-unescaped-entities */
import '../styles.css'; 

const About = () => {
    const personalInfo = {
        name: "Raj Ashok Sabale",
        email: "sabaleraj744@gmail.com",
        phone: "+91 7558550310",
        location: "Pune, Maharashtra, India",
    };

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
                "Actively participate in Capture The Flag (CTF) challenges.",
                "Apply ethical hacking techniques and methodologies to solve cybersecurity challenges.",
                "Collaborate with teammates to enhance problem-solving skills."
            ],
        },
        {
            title: "Cyber Security Intern",
            company: "Durbhasi Gurukulam",
            year: "May - July 2024",
            description: [
                "Performed black box penetration test on 2 domains.",
                "Found sensitive information disclosure bug."
            ],
        },
        {
            title: "C# Intern",
            company: "Squirrels Infotech",
            year: "Jan - Feb 2023",
            description: [
                "Developed a Windows Forms application for a client.",
                "Implemented CRUD operations using C# and SQL Server."
            ],
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">About Me</h1>
            
            <div className="row">
                {/* Personal Info */}
                <div className="container mt-4">
                    <h3 className="mb-3 text-center">Personal Information</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Name:</strong> {personalInfo.name}</li>
                        <li className="list-group-item"><strong>Email:</strong> {personalInfo.email}</li>
                        <li className="list-group-item"><strong>Phone:</strong> {personalInfo.phone}</li>
                        <li className="list-group-item"><strong>Location:</strong> {personalInfo.location}</li>
                    </ul>
                </div>
                
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
            </div>

            {/* Experience */}
            <div className="mt-4">
                <h3 className="mb-3 text-center">Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{exp.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{exp.company} | {exp.year}</h6>
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
    );
};

export default About;
