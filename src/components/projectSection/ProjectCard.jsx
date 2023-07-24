import React, { useState } from 'react';
import Button from '../common/button/Button.jsx';
import {
	VIEW_CODE_TEXT,
	VIEW_PROJECT_TEXT,
} from '../../utilities/appConstants.js';

const ProjectCard = ({ data }) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const style = {
		backgroundImage: `url(${data.placeholderImg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	};

	return (
		<article>
			<div
				className={`projects-img-container ${
					imgLoaded ? 'projects-img-loaded' : ''
				}`}
				style={!imgLoaded ? style : {}}
			>
				<img
					src={data.img}
					alt='project img'
					loading='lazy'
					onLoad={() => {
						setImgLoaded(true);
					}}
				/>
				{imgLoaded && (
					<div className='projects-resources-container'>
						<Button text={VIEW_PROJECT_TEXT} />
						<Button text={VIEW_CODE_TEXT} />
					</div>
				)}
			</div>
			<h2 className='projects-title'>{data.title}</h2>
			{data.stack.map((item) => {
				return (
					<span key={item} className='projects-stack'>
						{item}
					</span>
				);
			})}
		</article>
	);
};

export default ProjectCard;
