import '../styles.css'; 

const Projects = () => {
  return (
          <div className="container py-5">
              <h1 className="text-center mb-4">Get in Touch</h1>
              
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
      </div>
      );
  };
  
  export default Projects;