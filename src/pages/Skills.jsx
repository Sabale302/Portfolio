
const Skills = () => {
    const skills = [
      { name: "Project 1", description: "Description of project 1" },
      { name: "Project 2", description: "Description of project 2" },
      { name: "Project 3", description: "Description of project 3" },
    ];
  
    return (
      <section className="p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  