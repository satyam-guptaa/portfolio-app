import React from 'react';
import './button.scss';

const Button = ({ text, onChange }) => {
	return (
		<>
			<button onClick={onChange}>{text}</button>
		</>
	);
};

export default Button;
