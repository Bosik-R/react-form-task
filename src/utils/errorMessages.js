export const errorMessage = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required';
	}
	if (values.name && values.name.length < 5) {
		errors.name = 'To short name';
	}
	if (!values.type) {
		errors.type = 'Required';
	}

	if (!values.preparation_time) {
		errors.preparation_time = 'Required';
	}
	if (values.type === 'pizza') {
		if (!values.no_of_slices) {
			errors.no_of_slices = 'Required';
		}
		if (!values.diameter) {
			errors.diameter = 'Required';
		}
	}
	if (values.type === 'soup') {
		if (!values.spiciness_scale) {
			errors.spiciness_scale = 'Required';
		}
	}
	if (values.type === 'sandwich') {
		if (!values.slices_of_bread) {
			errors.slices_of_bread = 'Required';
		}
	}
	return errors;
};
