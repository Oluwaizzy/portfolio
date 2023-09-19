import Project from "./Project";
import { projectData } from "./data/data";

const Projects = () => {
  return (
    <div className="projects" id="project">
      <h2>Projects</h2>
      <div className="main_project">
        {projectData?.map((proj, idx) => (
          <Project project={proj} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
