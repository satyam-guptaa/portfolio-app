import React, { useState } from 'react';
import './contact.scss';
import {
	CONTACT_DESC,
	CONTACT_HEADING,
	EMAIL_PLACEHOLDER,
	MESSAGE_PLACEHOLDER,
	NAME_PLACEHOLDER,
	SEND_MESSAGE_BUTTON,
} from '../../utilities/appConstants';
import Input from '../common/inputs/Input';
import Button from '../common/button/Button.jsx';
import HeadFoot from '../common/headerFooter';

const Contact = () => {
	const [error, setError] = useState({ name: '', email: '', message: '' });
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		message: '',
	});

	const validation = () => {
		const keys = Object.keys(inputValues);
		const updatedError = {};

		keys.forEach((input) => {
			if (inputValues[input].length === 0) {
				updatedError[input] = 'Cannot be empty!';
				console.log(input, updatedError);
			} else if (input === 'email' && !inputValues[input].includes('@')) {
				updatedError[input] = 'Sorry, invalid format here';
			} else {
				updatedError[input] = '';
			}
		});

		setError({ ...error, ...updatedError });
	};

	const handleOnChange = (e, type) => {
		const value = e.target.value;
		switch (type) {
			case 'name':
				setInputValues({ ...inputValues, name: value });
				break;
			case 'email':
				setInputValues({ ...inputValues, email: value });
				break;
			case 'message':
				setInputValues({ ...inputValues, message: value });
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validation();
	};

	return (
		<section className='contact-wrapper'>
			<article className='contact'>
				<div className='contact-text-section'>
					<h1>{CONTACT_HEADING}</h1>
					<p>{CONTACT_DESC}</p>
				</div>
				<form className='contact-form' onSubmit={handleSubmit}>
					<Input
						value={inputValues.name}
						type='text'
						placeholder={NAME_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, 'name')}
						error={error.name}
					/>
					<Input
						value={inputValues.email}
						type='text'
						placeholder={EMAIL_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, 'email')}
						error={error.email}
					/>
					<textarea
						name='message'
						value={inputValues.message}
						id='message'
						cols='30'
						rows='5'
						placeholder={MESSAGE_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, 'message')}
					></textarea>
					<p className='error-text'>{error.message}</p>
					<Button text={SEND_MESSAGE_BUTTON} />
				</form>
			</article>
			<div className='contact-divider'></div>
			<div className='contact-footer'>
				<HeadFoot />
			</div>
			<img
				src='/assets/images/pattern-rings.svg'
				className='rings'
				alt='rings'
			/>
		</section>
	);
};

export default Contact;
