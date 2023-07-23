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

const About = () => {
	return (
		<section className='about'>
			<article className='about-head'>
				<h3>{PORTFOLIO_TEXT}</h3>
				<div className='about-head-links'>
					<img src='/assets/images/icon-github.svg' alt='git' />
					<img
						src='/assets/images/icon-frontend-mentor.svg'
						alt='FE'
					/>
					<img src='/assets/images/icon-linkedin.svg' alt='Lk' />
					<img src='/assets/images/icon-twitter.svg' alt='tweeter' />
				</div>
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
				<button className='about-body-contact-link'>
					{CONTACT_ME_LINK}
				</button>
			</article>
			<div className='about-profile-image-container'>
				<img
					src='/assets/images/image-profile-desktop.webp'
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
		</section>
	);
};

export default About;
