import React from "react";
import './Projects.css';
import ProjectCard from "../cards/ProjectCard";

import projects from "../../data/projects";


function Projects() {
    return (
        <div id="projects">
            <div className="header">
                <h1 id="section-name">Projects</h1>
            </div>
            <div className ="cards">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <ProjectCard  {...project}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;