import React from 'react';
import skills from '../../utilities/skillsData';
import { EXP_TEXT } from '../../utilities/appConstants';

const Skills = () => {
	return (
		<section className='about-skills'>
			{skills.map((item) => {
				return (
					<article key={item.skill}>
						<h3>{item.skill}</h3>
						<p>
							{`${item.exp}
							${EXP_TEXT}`}
						</p>
					</article>
				);
			})}
		</section>
	);
};

export default Skills;
