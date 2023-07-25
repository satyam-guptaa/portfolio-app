import React from 'react';
import projects from '../../utilities/projectsData';
import './project.scss';
import ProjectCard from './ProjectCard';
import { PROJECT_HEADING } from '../../utilities/appConstants';

const Projects = () => {
	return (
		<section className='projects add-section-padding'>
			<h1>{PROJECT_HEADING}</h1>
			{projects.map((project) => {
				return <ProjectCard key={project.title} data={project} />;
			})}
		</section>
	);
};

export default Projects;
