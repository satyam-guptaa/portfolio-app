import React, { useState } from 'react';
import './contact.scss';
import {
	CONTACT_DESC,
	CONTACT_HEADING,
	EMAIL_PLACEHOLDER,
	EMAIL_TYPE,
	MESSAGE_PLACEHOLDER,
	MESSAGE_TYPE,
	NAME_PLACEHOLDER,
	NAME_TYPE,
	SEND_MESSAGE_BUTTON,
} from '../../utilities/appConstants';
import Input from '../common/inputs/Input';
import Button from '../common/button/Button.jsx';
import HeadFoot from '../common/headerFooter';
import { validation } from '../../utilities/validation';
import emailjs from 'emailjs-com';

const Contact = () => {
	const [error, setError] = useState({ name: '', email: '', message: '' });
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		message: '',
	});
	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleOnChange = (e, type) => {
		const value = e.target.value;
		switch (type) {
			case NAME_TYPE:
				setInputValues({ ...inputValues, name: value });
				break;
			case EMAIL_TYPE:
				setInputValues({ ...inputValues, email: value });
				break;
			case MESSAGE_TYPE:
				setInputValues({ ...inputValues, message: value });
				break;
			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validation(inputValues)
			.then((res) => {
				const { message, updatedErr } = res;
				setError({ ...error, ...updatedErr });
				emailjs
					.sendForm(serviceId, templateId, e.target, publicKey)
					.then((result) => console.log(result))
					.catch((error) => console.log(error.text));
			})
			.catch((err) => {
				const { message, updatedErr } = err;
				setError({ ...error, ...updatedErr });
			});
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
						name='from_name'
						value={inputValues.name}
						type='text'
						placeholder={NAME_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, NAME_TYPE)}
						error={error.name}
					/>
					<Input
						value={inputValues.email}
						name='from_email'
						type='text'
						placeholder={EMAIL_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, EMAIL_TYPE)}
						error={error.email}
					/>
					<textarea
						name='message'
						value={inputValues.message}
						id='message'
						cols='30'
						rows='5'
						placeholder={MESSAGE_PLACEHOLDER}
						onChange={(e) => handleOnChange(e, MESSAGE_TYPE)}
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
