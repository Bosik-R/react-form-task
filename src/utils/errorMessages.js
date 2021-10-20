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
	if (values.type === 'pizza') {
		if (!values.street) {
			errors.noOfSlices = 'Required';
		}
		if (!values.diameter) {
			errors.diameter = 'Required';
		}
	}
	if (values.type === 'soup') {
		if (!values.spicinessScale) {
			errors.spicinessScale = 'Required';
		}
	}
	if (values.type === 'sandwich') {
		if (!values.slicesOfBread) {
			errors.slicesOfBread = 'Required';
		}
	}
	return errors;
};
