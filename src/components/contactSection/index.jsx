import React from 'react';
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
	return (
		<section className='contact-wrapper'>
			<article className='contact'>
				<div className='contact-text-section'>
					<h1>{CONTACT_HEADING}</h1>
					<p>{CONTACT_DESC}</p>
				</div>
				<form className='contact-form'>
					<Input type='text' placeholder={NAME_PLACEHOLDER} />
					<Input type='email' placeholder={EMAIL_PLACEHOLDER} />
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='5'
						placeholder={MESSAGE_PLACEHOLDER}
					></textarea>
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
