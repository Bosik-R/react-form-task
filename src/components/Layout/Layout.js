import React, { Fragment } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Main from '../Main/Main';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.6);
`;

const Layout = () => {
	return (
		<Container>
			<GlobalStyles />
			<Main />
		</Container>
	);
};

export default Layout;
