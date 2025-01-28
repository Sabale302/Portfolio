/* eslint-disable react/no-unescaped-entities */
import { FaProjectDiagram, FaShieldAlt, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ProjectPage = () => {
  return (
    <div className="container py-5" style={{marginBottom: '90x'}}>
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="fw-bold">Projects</h1>
        <p className="text-muted">
          Take a closer look at the innovative projects we've worked on. From
          inception to execution, our projects reflect creativity, technical
          expertise, and dedication.
        </p>
      </header>

      {/* Project Cards Section */}
      <div className="row">
        {/* CAS */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <FaProjectDiagram size={40} className="mb-3 text-primary" />
              <h5 className="card-title">C.A.S (College Analytical Suite)</h5>
              <p className="card-text text-muted">
                Developed a comprehensive platform with over 1,000 active users,
                designed to streamline data insights and decision-making using
                React, Express.js, Power BI, and MySQL.
              </p>
              <Link to="https://github.com/Sabale302/EduVision" className="btn btn-outline-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* APEX */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <FaShieldAlt size={40} className="mb-3 text-success" />
              <h5 className="card-title">A.P.E.X (Anti Phishing Web Extension)</h5>
              <p className="card-text text-muted">
                Implemented a user-friendly web extension with a Random Forest
                model achieving 96% accuracy and MongoDB for data management.
              </p>
              <Link to="https://github.com/Sabale302/APEX" className="btn btn-outline-success mt-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* VisionCare */}
        <div className="col-md-4 mb-4 ">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <FaEye size={40} className="mb-3 text-danger" />
              <h5 className="card-title">VisionCare Ai</h5>
              <p className="card-text text-muted">
                Created a machine learning model for eye disease classification
                with 88% accuracy, deployed on Vercel, and integrated with IBM Watson.
              </p>
              <Link to="https://github.com/Sabale302/VisionCare-AI" className="btn btn-outline-danger mt-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;