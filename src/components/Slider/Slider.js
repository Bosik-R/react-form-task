import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	max-width: 500px;
	width: 100%;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Slider = () => {
	return (
		<ImageWrapper>
			<Image src={'images/pizza.jpg'} alt='pizza' />
		</ImageWrapper>
	);
};

export default Slider;
