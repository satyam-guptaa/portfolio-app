import {
	CANNOT_EMPTY_TEXT,
	EMAIL_TYPE,
	INVALID_FORMAT_TEXT,
} from './appConstants';

function checkEmail(email) {
	if (!email.includes('@')) return false;
	return email.split('@')[0].length > 0 && email.split('@')[1].length > 0
		? true
		: false;
}

export const validation = (inputValues) => {
	return new Promise((resolve, reject) => {
		const keys = Object.keys(inputValues);
		const updatedError = {};

		keys.forEach((input) => {
			if (inputValues[input].length === 0) {
				updatedError[input] = CANNOT_EMPTY_TEXT;
			} else if (
				input === EMAIL_TYPE &&
				inputValues[input].length !== 0 &&
				!checkEmail(inputValues[input])
			) {
				updatedError[input] = INVALID_FORMAT_TEXT;
			} else {
				updatedError[input] = '';
			}
		});
		if (Object.values(updatedError).every((value) => value.length === 0)) {
			resolve({
				message: 'Validation successful!',
				updatedErr: updatedError,
			});
		} else {
			reject({
				message: 'Validation failed!',
				updatedErr: updatedError,
			});
		}
	});
};
