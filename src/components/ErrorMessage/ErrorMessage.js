import React from 'react';
import { useOrderContext } from '../../globalContext/ContextProvider';
import styled from 'styled-components';

const Wrapper = styled.section`
	position: relative;
	max-width: 730px;
	width: 100%;
	height: 560px;
	padding: 20px 0;
	margin: 15px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 425px) {
		padding: 0;
		margin: 8px;
		height: 530px;
	}
	@media (max-width: 320px) {
		height: 500px;
	}
`;

const Text = styled.h1``;

const Message = styled.h3``;

const ErrorMessage = () => {
	const { message } = useOrderContext();

	return (
		<Wrapper>
			<Text>Something went wrong</Text>
			<Message>{message}</Message>
		</Wrapper>
	);
};

export default ErrorMessage;
