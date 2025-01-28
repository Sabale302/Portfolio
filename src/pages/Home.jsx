/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; 

const HomePage = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100">
        {/* Left Column for Photo */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src='./images/profile.jpg'
            alt="Raj Sabale"
            className="rounded mx-auto d-block"
            style={{ width: "80%", height: "80%" }}
          />
        </div>

        {/* Right Column for Text Content */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
          <h1 className="display-4 font-weight-bold">HI THERE!</h1>
          <h2 className="display-3 font-weight-bold text-primary">I'M RAJ SABALE</h2>

          <div className="mt-4">
            <p className='d-flex justify-content-start lh-lg fs-5'>
                I'm a 4th-year Computer Science and Engineering (CSE) student at KBP College of Engineering, Satara. 
                My passion lies in Cyber security and Web development. 
                Proficient in Javascript and Python. 
                I love finding bugs and solving problems.
            </p>
          </div>

          <div className="mt-4">
            <Link to="/about" className="btn btn-primary btn-lg me-4">
                About Me
            </Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">
                Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;