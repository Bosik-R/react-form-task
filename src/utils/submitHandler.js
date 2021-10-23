export const submitHandler = (values) => {
	const constValue = {
		name: values.name,
		type: values.type,
		preparation_time: values.preparation_time,
	};

	if (values.type === 'pizza') {
		const order = {
			...constValue,
			no_of_slices: parseInt(values.no_of_slices),
			diameter: parseFloat(values.diameter),
		};
		return order;
	}

	if (values.type === 'soup') {
		const order = {
			name: values.name,
			type: values.type,
			spiciness_scale: parseInt(values.spiciness_scale),
		};
		return order;
	}

	if (values.type === 'sandwich') {
		const order = {
			...constValue,
			slices_of_bread: parseInt(values.slices_of_bread),
		};
		return order;
	}
};
