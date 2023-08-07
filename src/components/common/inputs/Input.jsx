import React from 'react';
import './input.scss';

const Input = ({ placeholder, onChange, type, value, wrapperClass, error }) => {
	return (
		<>
			<input
				className={`commonInput ${wrapperClass} ${
					error.length > 0 ? 'input-error' : ''
				}`}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			<p className='error-text'>{error}</p>
		</>
	);
};

export default Input;
