import React from 'react';
import './input.scss';

const Input = ({ placeholder, onChange, type, value, wrapperClass }) => {
	return (
		<>
			<input
				className={`commonInput ${wrapperClass}`}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</>
	);
};

export default Input;
