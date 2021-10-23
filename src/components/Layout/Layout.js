import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Order from '../Order/Order';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const Container = styled.div`
	width: 100%;
`;

const MainContent = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	padding-top: 30px;
	justify-content: center;

	@media (max-width: 425px) {
		padding-top: 0;
	}
`;

const Layout = () => {
	return (
		<Container>
			<BrowserRouter>
				<GlobalStyles />
				<Header />
				<MainContent>
					<Switch>
						<Route exact path='/' component={MainPage} />
						<Route path='/order' component={Order} />
					</Switch>
				</MainContent>
			</BrowserRouter>
		</Container>
	);
};

export default Layout;
