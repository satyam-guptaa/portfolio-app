import React from 'react';
import './button.scss';

const Button = ({ text }) => {
	return (
		<>
			<button className='about-body-contact-link'>{text}</button>
		</>
	);
};

export default Button;
