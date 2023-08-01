import React from 'react';
import { PORTFOLIO_TEXT } from '../../../utilities/appConstants';
import './headerFooter.scss';

const HeadFoot = () => {
	return (
		<div className='headFoot'>
			<h3>{PORTFOLIO_TEXT}</h3>
			<div className='links'>
				<a href='https://github.com/satyam-guptaa' target='_blank'>
					<img src='/assets/images/icon-github.svg' alt='git' />
				</a>
				<a
					href='https://linkedin.com/in/satyam-gupta1997'
					target='_blank'
				>
					<img src='/assets/images/icon-linkedin.svg' alt='Lk' />
				</a>
			</div>
		</div>
	);
};

export default HeadFoot;
