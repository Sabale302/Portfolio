import '../styles.css'; 
import { FaBriefcase, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Get in Touch</h1>

      <div className="row">
        {/* Align left */}
        <div className="col-md-4 d-flex flex-column">
          <p className="d-flex align-items-center">
            <FaBriefcase className="me-2" />
            Don't be shy!
          </p>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <p>
            <FaEnvelope className="me-2" />
            Mail me <br />
            <a href="mailto:sabaleraj744@gmail.com">sabaleraj744@gmail.com</a>
          </p>
          <p>
            <FaPhone className="me-2" />
            Call me <br />
            <a href="tel:+917558550310">+91 7558550310</a>
          </p>

          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/raj-sabale/"
              target="_blank"
              rel="noreferrer"
              className="me-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.github.com/Sabale302"
              target="_blank"
              rel="noreferrer"
              className="me-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/raj__sabale/"
              target="_blank"
              rel="noreferrer"
              className="me-2"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Align right and get user info from form */}
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Projects;
