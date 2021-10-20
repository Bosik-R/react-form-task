import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../Header/Header';
import FormComponent from '../FormComponent/FormComponent';
import Slider from '../Slider/Slider';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url('images/backgroundImage.jpg');
`;

const ContentWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	//margin-top: 70px;
`;
const Content = styled.main`
	display: flex;
	max-width: 1024px;
	width: 100%;
	min-height: 400px;
	margin: 10px;
	flex-wrap: wrap;
`;

const Layout = () => {
	return (
		<Container>
			<GlobalStyles />
			<Header />
			<ContentWrapper>
				<Content>
					<FormComponent />
					<Slider />
				</Content>
			</ContentWrapper>
		</Container>
	);
};

export default Layout;
