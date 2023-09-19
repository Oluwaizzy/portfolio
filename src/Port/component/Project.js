import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Project = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="project" data-aos={project.animate}>
      <div className="proj_img">
        <div className="proj_overlay">
          <a href={project.git}>
            <FaGithub />
          </a>
          <a href={project.link} target="blank">
            <FaGlobe />
          </a>
        </div>
        <img
          src={`./Port/proj/${project.image}.png`}
          alt=""
          className="project_image"
        />
      </div>
      <div className="project_bottom">
        <div className="project_title">{project.title}</div>
        <div className="project_summary">{project.summary}</div>
      </div>
    </div>
  );
};

export default Project;
