export const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.PIZZA:
			return {
				name: action.payload.name,
				type: action.payload.type,
				preparation_time: action.payload.preparation_time,
				no_of_slices: parseInt(action.payload.no_of_slices),
				diameter: parseFloat(action.payload.diameter),
			};
		case ACTIONS.SOUP:
			return {
				name: action.payload.name,
				type: action.payload.type,
				preparation_time: action.payload.preparation_time,
				spiciness_scale: parseInt(action.payload.spiciness_scale),
			};
		case ACTIONS.SANDWICH:
			return {
				name: action.payload.name,
				type: action.payload.type,
				preparation_time: action.payload.preparation_time,
				slices_of_bread: parseInt(action.payload.slices_of_bread),
			};
		default:
			return state;
	}
};

export const ACTIONS = {
	PIZZA: 'pizza',
	SOUP: 'soup',
	SANDWICH: 'sandwich',
};
