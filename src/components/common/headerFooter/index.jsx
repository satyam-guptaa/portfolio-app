import React from 'react';
import { PORTFOLIO_TEXT } from '../../../utilities/appConstants';
import './headerFooter.scss';

const HeadFoot = () => {
	return (
		<div className='headFoot'>
			<h3>{PORTFOLIO_TEXT}</h3>
			<div className='links'>
				<img src='/assets/images/icon-github.svg' alt='git' />
				<img src='/assets/images/icon-frontend-mentor.svg' alt='FE' />
				<img src='/assets/images/icon-linkedin.svg' alt='Lk' />
				<img src='/assets/images/icon-twitter.svg' alt='tweeter' />
			</div>
		</div>
	);
};

export default HeadFoot;
