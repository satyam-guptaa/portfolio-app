import React from 'react';
import { competencies } from '../../utilities/competencyData';

const Competencies = () => {
	const renderDetails = ({ year, category, rating, fontSize }) => {
		return (
			<div className='details' style={{ fontSize: fontSize }}>
				<div className='detail'>{year}</div>
				<div className='detail detail-category'>{category}</div>
				<div className='detail'>{rating}</div>
			</div>
		);
	};

	return (
		<section className='about-competencies'>
			<h3>Additional Competencies</h3>
			<p className='details'>
				{competencies.map((item) => {
					return (
						<span key={item.name} className='detail'>
							{item.name}
						</span>
					);
				})}
			</p>
		</section>
	);
};

export default Competencies;
