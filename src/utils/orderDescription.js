export const orderDescription = (order) => {
	if (order.type === 'pizza')
		return {
			text: `Your stone stove baked ${order.diameter > 40 ? `big` : `small`} "${order.name}" pizza`,
			orderData: [
				{ keyName: 'dish Name', dataValue: order.name },
				{ keyName: 'dish Type', dataValue: order.type },
				{ keyName: 'preparation time', dataValue: order.preparation_time },
				{ keyName: 'number of slices', dataValue: order.no_of_slices },
				{ keyName: 'diameter', dataValue: order.diameter },
			],
		};
	if (order.type === 'soup')
		return {
			text: `Your delicious ${order.spiciness_scale > 5 ? `and spicy` : 'and mild'} "${order.name}"  soup`,
			orderData: [
				{ keyName: 'dish Name', dataValue: order.name },
				{ keyName: 'dish Type', dataValue: order.type },
				{ keyName: 'preparation time', dataValue: order.preparation_time },
				{ keyName: 'spiciness scale', dataValue: order.spiciness_scale },
			],
		};
	if (order.type === 'sandwich')
		return {
			text: `Your freshly prepared ${order.slices_of_bread === 1 ? 'slice' : 'slices'} of our adored "${order.name}" sandwich`,
			orderData: [
				{ keyName: 'dish Name', dataValue: order.name },
				{ keyName: 'dish Type', dataValue: order.type },
				{ keyName: 'preparation time', dataValue: order.preparation_time },
				{ keyName: 'slices of bread', dataValue: order.slices_of_bread },
			],
		};
};
