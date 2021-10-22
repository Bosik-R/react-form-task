import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../Header/Header';
import FormComponent from '../FormComponent/FormComponent';
import Feedback from '../Feedback/Feedback';

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-image: url('images/backgroundImage.jpg');
	display: grid;
	place-items: center;
`;

const Content = styled.main`
	display: flex;
	max-width: 730px;
	width: 100%;

	/* @media (max-width: 1024px) {
		width: 500px;
		flex-direction: column;
		align-items: center;
		juatify-content: center;
	}

	@media (max-width: 550px) {
		width: 300px;
	} */
`;

const Layout = () => {
	return (
		<Container>
			<GlobalStyles />
			<Header />
			<Content>
				<FormComponent />
				{/* <Feedback /> */}
			</Content>
		</Container>
	);
};

export default Layout;
