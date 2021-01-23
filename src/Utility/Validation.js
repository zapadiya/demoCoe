export const isEmpty = (value) => {
	if (value === '') {
		return true;
	}
	return false;
};

export const isValidEmail = (email) => {
	const reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	if (reg.test(email) === true) {
		return true;
	}
	return false;
};

export const checkPasswordMinLength = (password, minLength) => {
	if (password.length >= minLength) {
		return true;
	}
	return false;
}

export const checkPasswordMaxLength = (password, maxLength) => {
	if (password.length <= maxLength) {
		return true;
	}
	return false;
};

export const checkPasswordType = (password) => {
	if (password.search(/[0-9]/) < 0  && password.search(/[!@#$%^&*]/) < 0 && password.search(/[!@#$%^&*]/) < 0) {
		return true;
	}
	return false;
};


export const isValidComparedPassword = (password, confirmPassword) => {
	if (password == confirmPassword) {
		return true;
	}
	return false;
};

export const isValidPhoneNumber = (phoneNumber) => {
	if (phoneNumber.length >= 10) {
		for (i = 0; i < phoneNumber.length; i++) {
			if (isNaN(phoneNumber[i])) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
};

export const randomString = (length) => {
	return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1);
};