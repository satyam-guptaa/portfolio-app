import React from 'react';
import Skills from './Skills';
import './about.scss';
import {
	CONTACT_ME_LINK,
	GREETING,
	FULL_NAME,
	INTRO,
	PORTFOLIO_TEXT,
} from '../../utilities/appConstants';
import Button from '../common/button/Button';
import HeadFoot from '../common/headerFooter';

const About = () => {
	return (
		<section className='about add-section-padding'>
			<article className='about-head'>
				<HeadFoot />
				<img
					src='/assets/images/pattern-circle.svg'
					alt='circle'
					className='about-head-circle-img'
				/>
			</article>
			<article className='about-body'>
				<div className='about-body-greet'>
					<h1>
						{GREETING} I'm <span>{FULL_NAME}.</span>
					</h1>
				</div>
				<p className='about-body-intro'>{INTRO}</p>
				<Button text={CONTACT_ME_LINK} />
			</article>
			<div className='about-profile-image-container'>
				<img
					src='/assets/images/portfolio-img.png'
					alt='profilemage'
					className='profile-img'
				/>
				<img
					src='/assets/images/pattern-circle.svg'
					alt='circle'
					className='circle-img'
				/>
			</div>
			<div className='about-top-ring-img-container'>
				<img src='/assets/images/pattern-rings.svg' alt='rings' />
			</div>
			<div className='about-divider'></div>
			<Skills />
			<div className='about-bottom-ring-img-container'>
				<img src='/assets/images/pattern-rings.svg' alt='rings' />
			</div>
			<div className='about-divider about-bottom-divider'></div>
		</section>
	);
};

export default About;
