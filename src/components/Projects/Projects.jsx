import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard'

function Projects(props) {
  const projects = [
    { heading: "Elabs Quiz", decript: "A website made for our not for profit peer to peer teaching society." },
    { heading: "Sarazaiten", decript: "AI powered curriculum orriented education platform" },
    { heading: "Nut-or-Not", decript: "A fun small project" },
    { heading: "My Vim Config", decript: "self explanatory" },
  ];
  return (
	<div className="projects">
	  {window.innerWidth > 1000 && Array(4).fill(0).map((item, i) => <ProjectCard key={i} value={i} heading={projects[i].heading} descript={projects[i].decript} />)}
	  {window.innerWidth < 1000 && Array(2).fill(0).map((item, i) => <ProjectCard key={i} value={i} heading={projects[i].heading} descript={projects[i].decript} />)}
	</div>
  );
}

export default Projects;
