export const orderDescription = (order) => {
	if (order.type === 'pizza')
		return {
			firstLine: `Your stone stove baked ${order.no_of_slices} slices`,
			secondLine: `of our ${order.diameter > 40 ? `big` : `small`} (${order.diameter} cm) crispy " ${order.name} " pizza`,
			prepTime: order.preparation_time,
		};
	if (order.type === 'soup')
		return {
			firstLine: `Your delicious ${order.spiciness_scale > 5 ? `and spicy` : 'and not so spicy'}`,
			secondLine: ` " ${order.name} "  soup`,
			prepTime: order.preparation_time,
		};
	if (order.type === 'sandwich')
		return {
			firstLine: `Your freshly prepared ${order.slices_of_bread} ${order.slices_of_bread === 1 ? 'slice' : 'slices'} `,
			secondLine: `of our adored " ${order.name} " sandwich`,
			prepTime: order.preparation_time,
		};
};
