import React from 'react';
import './about.scss';
import {
	CONTACT_ME_LINK,
	GREETING,
	FIRST_NAME,
	FULL_NAME,
	INTRO,
} from '../../constants';

const About = () => {
	return (
		<section className='about'>
			<article className='about-head'>
				<h3>{FIRST_NAME}</h3>
				<div className='about-head-links'>
					<img src='/assets/images/icon-github.svg' alt='git' />
					<img
						src='/assets/images/icon-frontend-mentor.svg'
						alt='FE'
					/>
					<img src='/assets/images/icon-linkedin.svg' alt='Lk' />
					<img src='/assets/images/icon-twitter.svg' alt='tweeter' />
				</div>
			</article>
			<article className='about-body'>
				<div className='about-body-greet'>
					<p>{GREETING}</p>
					<p>
						I'm <span>{FULL_NAME}.</span>
					</p>
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
		</section>
	);
};

export default About;
